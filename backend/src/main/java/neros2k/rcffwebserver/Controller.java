package neros2k.rcffwebserver;
import neros2k.rcffwebserver.response.BaseComponent;
import neros2k.rcffwebserver.response.ServerResponse;
import neros2k.rcffwebserver.response.TestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@RestController
public class Controller {
    @Autowired
    private Repository REPOSITORY;
    @GetMapping("/api/new")
    public void newServer(@RequestParam(name = "id") Long ID,
                          @RequestParam(name = "desc", defaultValue = "Нет.") String DESC,
                          @RequestParam(name = "invite", defaultValue = "Нет.") String INVITE) {
        this.REPOSITORY.save(new ServerModel(ID, DESC, INVITE));
    }
    @GetMapping("/api/get")
    public BaseComponent getServer(@RequestParam(name = "id") Long ID) {
        Optional<ServerModel> SERVER_MODEL_OPT = this.REPOSITORY.findById(ID);
        if(SERVER_MODEL_OPT.isPresent()) return new ServerResponse(SERVER_MODEL_OPT.get());
        else return new BaseComponent("error");
    }
    @GetMapping("/api/list/accept")
    public List<ServerResponse> getAcceptServerList() {
        ArrayList<ServerResponse> SERVER_REPONSES = new ArrayList<>();
        this.REPOSITORY.findAll().forEach((MODEL) -> {
            if(MODEL.getServerStatus()) {
                SERVER_REPONSES.add(new ServerResponse(MODEL));
            }
        });
        return SERVER_REPONSES;
    }
    @GetMapping("/api/list/checking")
    public List<ServerResponse> getDeclineServerList() {
        ArrayList<ServerResponse> SERVER_RESPONSE = new ArrayList<>();
        this.REPOSITORY.findAll().forEach((MODEL) -> {
            if(MODEL.getServerStatus()) {
                SERVER_RESPONSE.add(new ServerResponse(MODEL));
            }
        });
        return SERVER_RESPONSE;
    }
    @GetMapping("/api/accept")
    public void acceptServer(@RequestParam(name = "id") Long ID) {
        Optional<ServerModel> SERVER_MODEL_OPT = this.REPOSITORY.findById(ID);
        if(SERVER_MODEL_OPT.isPresent()) {
            ServerModel NEW_SERVER_MODEL = SERVER_MODEL_OPT.get();
            NEW_SERVER_MODEL.setServerStatus(true);
            this.REPOSITORY.save(NEW_SERVER_MODEL);
        }
    }
    @GetMapping("/api/delete")
    public void deleteServer(@RequestParam(name = "id") Long ID) {
        Optional<ServerModel> SERVER_MODEL_OPT = this.REPOSITORY.findById(ID);
        SERVER_MODEL_OPT.ifPresent(SERVER_MODEL -> this.REPOSITORY.delete(SERVER_MODEL));
    }
    @PostMapping("/api/test")
    public TestResponse test(@RequestParam(name = "data") String DATA) {
        return new TestResponse(DATA);
    }
}
