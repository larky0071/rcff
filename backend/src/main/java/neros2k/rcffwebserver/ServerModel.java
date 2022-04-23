package neros2k.rcffwebserver;
import net.dv8tion.jda.api.OnlineStatus;
import net.dv8tion.jda.api.entities.Guild;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class ServerModel {
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
        try {
            return DiscordBot.getMembers(this.SERVER_ID, (MEMBER -> (MEMBER.getOnlineStatus() == OnlineStatus.OFFLINE)));
        } catch(NullPointerException EXCEPTION) {
            return 0;
        }
    }
    public Integer getOnlineMembers() {
        try {
            return DiscordBot.getMembers(this.SERVER_ID, (MEMBER -> (MEMBER.getOnlineStatus() != OnlineStatus.OFFLINE)));
        } catch(NullPointerException EXCEPTION) {
            return 0;
        }
    }
    public String getName() {
        try {
            Guild GUILD = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
            if (GUILD == null) return null;
            return GUILD.getName();
        } catch(NullPointerException EXCEPTION) {
            return " ";
        }
    }
    public String getIcon() {
        try {
            Guild GUILD = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
            if (GUILD == null) return null;
            return GUILD.getIconId();
        } catch(NullPointerException EXCEPTION) {
            return " ";
        }
    }
    public String getBanner() {
        try {
            Guild GUILD = DiscordBot.getDiscordBot().getGuildById(this.SERVER_ID);
            if (GUILD == null) return null;
            return GUILD.getBannerId();
        } catch(NullPointerException EXCEPTION) {
            return " ";
        }
    }
    public void setServerStatus(Boolean status) {
        this.SERVER_STATUS = status;
    }
}
