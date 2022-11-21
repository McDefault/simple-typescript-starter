import { SapphireClient } from '@sapphire/framework';
import {Intents} from "discord.js";

const client = new SapphireClient({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(process.env.TOKEN);