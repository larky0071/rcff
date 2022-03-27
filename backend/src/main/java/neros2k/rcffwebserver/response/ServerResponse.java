package neros2k.rcffwebserver.response;
import neros2k.rcffwebserver.ServerModel;
import org.jetbrains.annotations.NotNull;
public class ServerResponse extends BaseComponent {
    private final Long ID;
    private final Integer MEMBERS_ONLINE, MEMBERS_OFFLINE;
    private final String NAME, DESC, INVITE, ICON, BANNER;
    public ServerResponse(@NotNull ServerModel serverModel) {
        super(String.valueOf(serverModel.getServerStatus()));
        this.ID = serverModel.getServerId();
        this.MEMBERS_ONLINE = serverModel.getOnlineMembers();
        this.MEMBERS_OFFLINE = serverModel.getOnlineMembers();
        this.NAME = serverModel.getName();
        this.DESC = serverModel.getServerDesc();
        this.INVITE = serverModel.getServerInvite();
        this.ICON = serverModel.getIcon();
        this.BANNER = serverModel.getBanner();
    }
    public Long getId() {
        return this.ID;
    }
    public Integer getMembersOnline() {
        return this.MEMBERS_ONLINE;
    }
    public Integer getMembersOffline() {
        return this.MEMBERS_OFFLINE;
    }
    public String getName() {
        return this.NAME;
    }
    public String getDesc() {
        return this.DESC;
    }
    public String getInvite() {
        return this.INVITE;
    }
    public String getIcon() {
        return this.ICON;
    }
    public String getBanner() {
        return this.BANNER;
    }
}
