package neros2k.rcffwebserver.response;
public class BaseComponent {
    private final String STATUS;
    public BaseComponent(String STATUS) {
        this.STATUS = STATUS;
    }
    public String getStatus() {
        return this.STATUS;
    }
}
