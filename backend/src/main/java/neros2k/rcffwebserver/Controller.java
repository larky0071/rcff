package neros2k.rcffwebserver;
import neros2k.rcffwebserver.response.BaseComponent;
import neros2k.rcffwebserver.response.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@RestController
public class Controller {
    @Autowired
    private ServerRepository serverRepository;
    @GetMapping("/new/{id}/{desc}/{invite}")
    public void newServer(Long id, String desc, String invite) {
        this.serverRepository.save(new ServerModel(id, desc, invite));
    }
    @GetMapping("/get/{id}")
    public BaseComponent getServer(Long id) {
        Optional<ServerModel> serverModel = this.serverRepository.findById(id);
        if(serverModel.isPresent()) return new ServerResponse(serverModel.get());
        else return new BaseComponent("error");

    }
    @GetMapping("/list/accept")
    public List<ServerResponse> getAcceptServerList() {
        ArrayList<ServerResponse> serverResponses = new ArrayList<>();
        this.serverRepository.findAll()
            .forEach(server -> {
                if(server.getServerStatus()) {
                    serverResponses.add(new ServerResponse(server));
                }
            });
        return serverResponses;
    }
    @GetMapping("/list/checking")
    public List<ServerResponse> getDeclineServerList() {
        ArrayList<ServerResponse> serverResponses = new ArrayList<>();
        this.serverRepository.findAll()
                .forEach(server -> {
                    if(!server.getServerStatus()) {
                        serverResponses.add(new ServerResponse(server));
                    }
                });
        return serverResponses;
    }
    @GetMapping("/accept/{id}")
    public void acceptServer(Long id) {
        Optional<ServerModel> serverModelOptional = this.serverRepository.findById(id);
        if(serverModelOptional.isPresent()) {
            ServerModel serverModel = serverModelOptional.get();
            serverModel.setServerStatus(true);
            this.serverRepository.save(serverModel);
        }
    }
    @GetMapping("/delete/{id}")
    public void deleteServer(Long id) {
        this.serverRepository.deleteById(id);
    }
}
