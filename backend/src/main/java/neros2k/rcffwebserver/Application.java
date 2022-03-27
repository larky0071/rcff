package neros2k.rcffwebserver;
import net.dv8tion.jda.api.JDABuilder;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.SpringApplication;
import javax.security.auth.login.LoginException;
public class Application {
    private static final String TOKEN = "Nzc2MDIyMTQ4ODMzMjE0NDY1.X6u08g.Wzqyw3Uuk9YFaus2H4pF2C2e_Ng";
    public static void main(@NotNull String[] args) throws LoginException, InterruptedException {
        DiscordBot.setDiscordBot(JDABuilder.createDefault(TOKEN).build());
        DiscordBot.getDiscordBot().awaitReady();
        SpringApplication.run(Application.class, args);
    }
}
