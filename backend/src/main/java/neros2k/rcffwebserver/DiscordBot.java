package neros2k.rcffwebserver;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.entities.Guild;
import net.dv8tion.jda.api.entities.Member;
import org.jetbrains.annotations.Nullable;
import java.util.function.Predicate;
import java.util.stream.Stream;
public class DiscordBot {
    private static JDA DISCORD_BOT;
    public static JDA getDiscordBot() {
        return DISCORD_BOT;
    }
    public static void setDiscordBot(JDA discordBot) {
        DISCORD_BOT = discordBot;
    }
    public static @Nullable Integer getMembers(Long id, Predicate<? super Member> predicate) {
        Guild guild = DISCORD_BOT.getGuildById(id);
        if(guild == null) return null;
        {
            Stream<Member> STREAM = guild.getMembers().stream().filter(predicate);
            return Math.toIntExact(STREAM.count());
        }
    }
}
