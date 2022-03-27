package neros2k.rcffwebserver;
import net.dv8tion.jda.api.OnlineStatus;
import net.dv8tion.jda.api.entities.Guild;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class ServerModel {
    // В случае ошибки объявить SERVER_ID без аннотации @Id
    @Id
    private final Long SERVER_ID;
    private Boolean SERVER_STATUS;
    private final String SERVER_DESC, SERVER_INVITE;
    public ServerModel(Long serverId, String serverDesc, String serverInvite) {
        this.SERVER_ID = serverId;
        this.SERVER_DESC = serverDesc;
        this.SERVER_INVITE = serverInvite;
        this.SERVER_STATUS = false;
    }
    public Long getServerId() {
        return this.SERVER_ID;
    }
    public Boolean getServerStatus() {
        return SERVER_STATUS;
    }
    public String getServerDesc() {
        return this.SERVER_DESC;
    }
    public String getServerInvite() {
        return this.SERVER_INVITE;
    }
    public Integer getOfflineMembers() {
        return DiscordBot.getMembers(this.SERVER_ID, (member -> (member.getOnlineStatus() == OnlineStatus.OFFLINE)));
    }
    public Integer getOnlineMembers() {
        return DiscordBot.getMembers(this.SERVER_ID, (member -> (member.getOnlineStatus() != OnlineStatus.OFFLINE)));
    }
    public String getName() {
        Guild guild = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
        if(guild == null) return null;
        return guild.getName();
    }
    public String getIcon() {
        Guild guild = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
        if(guild == null) return null;
        return guild.getIconId();
    }
    public String getBanner() {
        Guild guild = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
        if(guild == null) return null;
        return guild.getBannerId();
    }
    public void setServerStatus(Boolean status) {
        this.SERVER_STATUS = status;
    }
}
