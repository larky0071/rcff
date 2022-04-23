package neros2k.rcffwebserver;
import net.dv8tion.jda.api.JDABuilder;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.security.auth.login.LoginException;
@SpringBootApplication
public class Application {
    private static final String TOKEN = "";
    public static void main(@NotNull String[] args) throws LoginException, InterruptedException {
        DiscordBot.setDiscordBot(JDABuilder.createDefault(TOKEN).build());
        DiscordBot.getDiscordBot().awaitReady();
        SpringApplication.run(Application.class, args);
    }
}
