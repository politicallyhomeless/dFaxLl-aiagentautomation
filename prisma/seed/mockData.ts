import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c2714067-94df-4fa8-ae78-7a148ae8e2fc', '1Domenic62@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2ebd99eb-b53e-4244-b994-d603947d32f5', '9Eloise22@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('1b086dac-e781-4c33-a4a7-2fb58a392f33', '17Daphne63@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv210987', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3923f61c-ad01-4cb2-b5dc-b10a9065fe51', '25Judge80@hotmail.com', 'Charlie White', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv210987', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('db16a4f3-7506-4fae-be82-c244755dc4fa', '33Opal31@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('97ca22e8-64ee-45dd-ac5d-14f975b2b03b', '41Myrl0@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('672a2539-3c16-4fd7-95f1-b6edfbfb2517', '49Ike86@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('067b8150-9da0-4c21-a0f8-471cc30913b8', '57Simone17@hotmail.com', 'Charlie White', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c', '65Eldridge.Lesch@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv210987', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('620456b5-aaea-4629-a29c-33af238aeee8', 'Integration Manual', 'Common Errors and Solutions', 'This guide provides an overview of how to set up and manage agents within the platform.', 'Introduction');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('3ac5113c-81c0-4a20-89e3-087e69f5aefc', 'Release Notes', 'Getting Started with Agents', 'Learn about the various authentication methods supported by our API including OAuth and API keys.', 'Updates');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('ee582320-fdda-4d3e-861c-80df8762d8b3', 'API Reference', 'New Features in Version 2.0', 'This guide provides an overview of how to set up and manage agents within the platform.', 'Updates');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('3639e5d8-52c5-4d80-af09-335ec12c0b9c', 'Release Notes', 'API Authentication Methods', 'Learn about the various authentication methods supported by our API including OAuth and API keys.', 'Troubleshooting');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('fdfc0938-da7e-4cbf-bbfa-e5d2544ea482', 'Troubleshooting', 'Integrating with ThirdParty Services', 'This guide provides an overview of how to set up and manage agents within the platform.', 'Troubleshooting');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('23075ab3-e175-46fd-9d7f-91e9cbc2a745', 'User Guide', 'API Authentication Methods', 'A list of common errors users may encounter and how to resolve them effectively.', 'Setup');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('50b05e5a-ad16-4cef-8286-8f41cf939bdb', 'User Guide', 'Integrating with ThirdParty Services', 'This guide provides an overview of how to set up and manage agents within the platform.', 'Setup');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('af5ef8c4-f105-4798-8596-055552595915', 'Troubleshooting', 'API Authentication Methods', 'Explore the new features and improvements introduced in version 2.0 of our platform.', 'Troubleshooting');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('1b39de73-e980-4ba6-b8bb-f0df1306f927', 'Integration Manual', 'API Authentication Methods', 'A list of common errors users may encounter and how to resolve them effectively.', 'Introduction');
INSERT INTO "Documentation" ("id", "category", "title", "content", "section") VALUES ('a445bb42-c2a2-44d9-b5d5-386f658d3727', 'Troubleshooting', 'New Features in Version 2.0', 'This guide provides an overview of how to set up and manage agents within the platform.', 'Configuration');

INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('53477ae4-7bfa-41a1-8843-655644568552', 'BetaAgent', 'Specialized in longterm strategic planning', 'hybrid', 'under maintenance', '{"creta":"odit","vicinus":"usque","nostrum":"aperio","tabesco":"nobis"}'::jsonb, '{"calculus":"solum","ait":"suspendo","dolores":"atrox"}'::jsonb, '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('459d1a43-359e-4fea-bd32-29834e720e6d', 'BetaAgent', 'Combines reactive and deliberative strategies', 'hybrid', 'under maintenance', '{"arcesso":"depereo","cubitum":"tenuis","arceo":"tyrannus"}'::jsonb, '{"dens":"tabgo","debitis":"animadverto"}'::jsonb, '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('f835ebc4-da31-4c5f-af4d-37a409347b16', 'DeltaProcessor', 'Specialized in longterm strategic planning', 'hybrid', 'active', '{"tricesimus":"demitto","quae":"thorax","vociferor":"defaeco"}'::jsonb, '{"adhuc":"strenuus","tracto":"suasoria","subiungo":"auctor","articulus":"vita"}'::jsonb, 'c2714067-94df-4fa8-ae78-7a148ae8e2fc');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('aed1381b-245f-4b1f-976a-258baa43b4ed', 'EpsilonUnit', 'Combines reactive and deliberative strategies', 'hybrid', 'inactive', '{"spoliatio":"demergo","delinquo":"aegrus","cornu":"patria"}'::jsonb, '{"arbor":"saepe","advoco":"caelum","ultio":"ventus"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('e5ac3699-f2a8-4574-a65d-3a3151b4272a', 'EpsilonUnit', 'Handles realtime data processing tasks', 'autonomous', 'active', '{"aegre":"cometes","cresco":"dolor","tenus":"eaque","iusto":"ubi","aufero":"voluptas"}'::jsonb, '{"subnecto":"statim","comis":"animadverto","suscipio":"aiunt","super":"amiculum","abduco":"ipsa"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('f030ec27-e831-4b03-b58c-3bbf5c081fdf', 'BetaAgent', 'Specialized in longterm strategic planning', 'hybrid', 'deployed', '{"derideo":"antea","sunt":"accusator","aeternus":"appono"}'::jsonb, '{"absens":"damnatio","ullus":"hic","capto":"adnuo","curatio":"traho","urbanus":"temeritas"}'::jsonb, '672a2539-3c16-4fd7-95f1-b6edfbfb2517');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('de78802c-e939-4e53-b1d5-ec3169940302', 'BetaAgent', 'Handles realtime data processing tasks', 'hybrid', 'pending', '{"spes":"campana","una":"quidem","adeo":"convoco","dignissimos":"abscido"}'::jsonb, '{"conservo":"adficio","patruus":"cito","alveus":"cur","vos":"callide","admoneo":"ventito"}'::jsonb, 'c2714067-94df-4fa8-ae78-7a148ae8e2fc');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('c4c568de-fefc-4b01-9f49-2fd601288273', 'DeltaProcessor', 'Combines reactive and deliberative strategies', 'collaborative', 'under maintenance', '{"apud":"terebro","arma":"cognomen","comminor":"vel","armarium":"capillus","vinitor":"adimpleo"}'::jsonb, '{"arceo":"spectaculum","arguo":"comminor","ex":"decipio","torrens":"decerno","depopulo":"facilis"}'::jsonb, '97ca22e8-64ee-45dd-ac5d-14f975b2b03b');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('1d2b478d-265c-4f83-9f59-bee28f97fef4', 'EpsilonUnit', 'Specialized in longterm strategic planning', 'reactive', 'active', '{"voluptatem":"depono","adinventitias":"conculco","saepe":"taedium"}'::jsonb, '{"via":"quibusdam","crinis":"expedita","dedico":"conitor","alioqui":"adulatio"}'::jsonb, '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Agent" ("id", "name", "description", "type", "status", "configuration", "template", "userId") VALUES ('3cf94604-a5a7-48ce-9257-ed1b8f260c63', 'EpsilonUnit', 'Combines reactive and deliberative strategies', 'reactive', 'inactive', '{"argumentum":"bos","desino":"ter","apostolus":"arbustum","velit":"animadverto"}'::jsonb, '{"laborum":"apparatus","tergo":"amicitia","callide":"denuo"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('61654575-605c-4bcd-a4c6-85cc706f813a', 'Data Backup Routine', 'Schedules and posts content on various social media platforms at optimal times.', 'active', '{"cibus":"stipes","pariatur":"admoneo","civis":"quas","supellex":"deserunt"}'::jsonb, '{"tepesco":"abundans","spectaculum":"sufficio","utroque":"calco"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('0b8c6edf-edac-4d70-9262-eb67a84c36f6', 'Customer Feedback Analysis', 'Schedules and posts content on various social media platforms at optimal times.', 'active', '{"cubo":"adamo","vir":"deduco","culpa":"coma"}'::jsonb, '{"inflammatio":"solium","caelum":"thema","sordeo":"derideo","crinis":"quos"}'::jsonb, '97ca22e8-64ee-45dd-ac5d-14f975b2b03b');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('e8cf4565-3c0e-44c6-a6d3-b2aab0467c79', 'Social Media Scheduler', 'Schedules and posts content on various social media platforms at optimal times.', 'failed', '{"cursim":"inflammatio","avaritia":"demo","itaque":"compono","tristis":"tergiversatio","abbas":"ustilo"}'::jsonb, '{"canto":"casus","claudeo":"vigilo","una":"videlicet"}'::jsonb, 'c2714067-94df-4fa8-ae78-7a148ae8e2fc');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('f94173c8-6fea-4b5b-b237-f70401732b99', 'Customer Feedback Analysis', 'Analyzes customer feedback to identify trends and areas for improvement.', 'pending', '{"suspendo":"volaticus","videlicet":"umerus","aeger":"voveo"}'::jsonb, '{"necessitatibus":"color","decens":"adeptio","calamitas":"aegrotatio"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('532ed3b8-ebc8-4cd8-a821-ad391e688853', 'Automated Email Response', 'Handles incoming emails and sends automated responses based on predefined rules.', 'failed', '{"sit":"quaerat","decerno":"tendo","caecus":"caute"}'::jsonb, '{"capitulus":"tristis","decerno":"celebrer","officiis":"territo","congregatio":"vix","dolor":"repellendus"}'::jsonb, 'db16a4f3-7506-4fae-be82-c244755dc4fa');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('61994ae2-f749-4acf-b48d-c62f39330d34', 'Weekly Sales Report', 'Performs a daily backup of critical data to ensure data integrity and security.', 'failed', '{"combibo":"causa","peccatus":"cubo","timidus":"creta"}'::jsonb, '{"tredecim":"uxor","advoco":"earum","spiritus":"dapifer","tergiversatio":"tres"}'::jsonb, '672a2539-3c16-4fd7-95f1-b6edfbfb2517');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('4f35858e-9306-425d-9763-80c75ef1a930', 'Data Backup Routine', 'Generates a comprehensive sales report every week to track performance metrics.', 'completed', '{"somniculosus":"caveo","ciminatio":"sonitus","vinco":"volup"}'::jsonb, '{"agnitio":"fuga","auditor":"abstergo","calcar":"labore","auxilium":"aggredior","abduco":"urbs"}'::jsonb, '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('bec5a06a-35dc-48f0-ad0a-52e2034b3976', 'Customer Feedback Analysis', 'Schedules and posts content on various social media platforms at optimal times.', 'completed', '{"harum":"surculus","versus":"talis","verecundia":"tutis","adulescens":"comminor","aperte":"xiphias"}'::jsonb, '{"contabesco":"artificiose","crebro":"amitto","adsuesco":"conqueror"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('21e1cbbb-f2e8-4ad8-8711-d7a77303facc', 'Automated Email Response', 'Schedules and posts content on various social media platforms at optimal times.', 'pending', '{"decimus":"volup","autem":"laboriosam","vesica":"venio"}'::jsonb, '{"considero":"coaegresco","suffragium":"delectus","addo":"tunc","demonstro":"arceo"}'::jsonb, 'db16a4f3-7506-4fae-be82-c244755dc4fa');
INSERT INTO "Workflow" ("id", "name", "description", "status", "schedule", "configuration", "userId") VALUES ('2260cc0f-e8ea-403f-aa8f-7c3a72fcca9e', 'Data Backup Routine', 'Generates a comprehensive sales report every week to track performance metrics.', 'pending', '{"audio":"iusto","minus":"campana","vesco":"tempore"}'::jsonb, '{"conservo":"utrum","admitto":"incidunt","illum":"temporibus","adicio":"cras","civis":"cauda"}'::jsonb, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('dd248cc6-d362-435e-adbe-d0fb3b5bc93f', 'WebSearchPro', 'data analysis', 'jkl012opq', '{"aestivus":"dolorem","audacia":"adstringo","adfectus":"atavus","sopor":"dolores","caecus":"adfero"}'::jsonb, 'pending', '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('c5aed73e-36ed-4695-8af6-a235be6db975', 'TaskScheduler', 'web search', 'abc123xyz', '{"absconditus":"ocer","aspernatur":"aestus","conor":"iste","acer":"coerceo","veritatis":"armarium"}'::jsonb, 'active', '672a2539-3c16-4fd7-95f1-b6edfbfb2517');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('2ae99529-5581-4584-a8e0-71197292afc9', 'DataAnalyzer', 'code execution', 'mno345lmn', '{"timidus":"molestias","tolero":"adflicto","admoneo":"corporis"}'::jsonb, 'deprecated', '5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('1616f305-c039-41bb-a32a-09744aafc8a8', 'DataAnalyzer', 'data analysis', 'mno345lmn', '{"laborum":"cavus","officia":"vel","sed":"cinis","demergo":"cimentarius"}'::jsonb, 'deprecated', '5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('ce1c7462-eb71-4c11-b8b7-8619caf01a8e', 'TaskScheduler', 'web search', 'def456uvw', '{"vulariter":"arx","pauci":"aperte","talus":"thymum","ara":"bestia","crepusculum":"delectatio"}'::jsonb, 'maintenance', '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('032015eb-40d8-40fa-89b9-2a9e6b0695f9', 'TaskScheduler', 'language model', 'abc123xyz', '{"depromo":"tertius","audeo":"corpus","vester":"callide"}'::jsonb, 'deprecated', '3923f61c-ad01-4cb2-b5dc-b10a9065fe51');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('b4a73bce-d7fe-4d0d-a0ad-1c5d6d0d9780', 'TaskScheduler', 'task management', 'abc123xyz', '{"argentum":"claro","adimpleo":"caveo","cupiditate":"solus","ancilla":"caelestis","laudantium":"distinctio"}'::jsonb, 'active', '97ca22e8-64ee-45dd-ac5d-14f975b2b03b');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('c9bfcfc4-a5da-47b0-b4de-d72dba1c29b4', 'CodeExecEngine', 'language model', 'mno345lmn', '{"cauda":"vorax","capto":"vero","cohors":"advoco","succurro":"celo"}'::jsonb, 'maintenance', '3923f61c-ad01-4cb2-b5dc-b10a9065fe51');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('c8fcd1d1-e0a1-40ca-b84f-e4af712fbc5b', 'DataAnalyzer', 'code execution', 'ghi789rst', '{"caries":"eos","compello":"demens","conspergo":"vulgivagus"}'::jsonb, 'active', '5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c');
INSERT INTO "Tool" ("id", "name", "type", "apiKey", "configuration", "status", "userId") VALUES ('b24e731d-0bdc-489f-95bd-1b65cc21bf3c', 'DataAnalyzer', 'code execution', 'abc123xyz', '{"ocer":"solium","repellendus":"campana","ciminatio":"terra","carpo":"soleo","eligendi":"aeternus"}'::jsonb, 'pending', '2ebd99eb-b53e-4244-b994-d603947d32f5');

INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('02bfd604-9de8-4cec-bdeb-a2623b2fe135', 108, '{"aggero":"bestia","spectaculum":"suffragium","aurum":"terebro","cubitum":"quaerat"}'::jsonb, 'bec5a06a-35dc-48f0-ad0a-52e2034b3976', 'f835ebc4-da31-4c5f-af4d-37a409347b16');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('14b4f934-8001-4310-a545-e6a12e6d4502', 926, '{"apud":"laborum","vacuus":"trepide","vis":"adaugeo","quaerat":"centum","copiose":"odit"}'::jsonb, '21e1cbbb-f2e8-4ad8-8711-d7a77303facc', '53477ae4-7bfa-41a1-8843-655644568552');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('54bee933-b512-4dc0-91c6-20ffa8151bf0', 204, '{"adopto":"aggero","velut":"curia","spoliatio":"dolores"}'::jsonb, '0b8c6edf-edac-4d70-9262-eb67a84c36f6', 'f030ec27-e831-4b03-b58c-3bbf5c081fdf');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('bb858485-edb7-43b9-9849-8d68432bab3d', 884, '{"arbor":"defessus","umerus":"urbs","contabesco":"benevolentia"}'::jsonb, 'f94173c8-6fea-4b5b-b237-f70401732b99', '459d1a43-359e-4fea-bd32-29834e720e6d');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('2946c09a-d101-4466-be3d-a011209d8a42', 649, '{"varietas":"ait","denego":"tersus","crebro":"vis","quas":"tabernus","tracto":"traho"}'::jsonb, 'e8cf4565-3c0e-44c6-a6d3-b2aab0467c79', 'c4c568de-fefc-4b01-9f49-2fd601288273');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('3f7a7f1a-1928-480e-bd58-35b2f0f273cd', 349, '{"victoria":"quaerat","textilis":"qui","dignissimos":"traho","optio":"uter"}'::jsonb, 'f94173c8-6fea-4b5b-b237-f70401732b99', 'aed1381b-245f-4b1f-976a-258baa43b4ed');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('5311edf0-3c3a-4e64-89ca-ee3006b1fead', 830, '{"ultio":"umbra","praesentium":"tremo","atavus":"cedo","commemoro":"atrocitas"}'::jsonb, '4f35858e-9306-425d-9763-80c75ef1a930', 'f835ebc4-da31-4c5f-af4d-37a409347b16');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('a719b415-b4aa-45f2-bf1f-ceb79d25bcc6', 867, '{"cibo":"concedo","sit":"vester","acceptus":"aspernatur","nesciunt":"cupio","suspendo":"temeritas"}'::jsonb, '4f35858e-9306-425d-9763-80c75ef1a930', 'f030ec27-e831-4b03-b58c-3bbf5c081fdf');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('a38551fe-75eb-4851-8f89-2a9c46737236', 677, '{"pel":"decipio","crastinus":"crebro","cras":"fugit"}'::jsonb, '21e1cbbb-f2e8-4ad8-8711-d7a77303facc', '3cf94604-a5a7-48ce-9257-ed1b8f260c63');
INSERT INTO "WorkflowAgent" ("id", "sequence", "configuration", "workflowId", "agentId") VALUES ('69fae98b-94c5-4194-881c-044fee385a6c', 549, '{"talus":"vel","volubilis":"ciminatio","quia":"aeger","conitor":"adinventitias","dicta":"custodia"}'::jsonb, '0b8c6edf-edac-4d70-9262-eb67a84c36f6', 'de78802c-e939-4e53-b1d5-ec3169940302');

INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('b9881b20-0ff8-4480-a5c5-23039fd3422b', 'cancelled', '2024-09-25T13:57:32.043Z', '2024-02-29T20:39:25.810Z', '{"anser":"repellat","tumultus":"vulgus","soluta":"sonitus","curo":"defleo","vetus":"iusto"}'::jsonb, '21e1cbbb-f2e8-4ad8-8711-d7a77303facc');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('7383d056-1127-4b48-8c9c-46631026caf0', 'cancelled', '2024-12-01T21:57:52.385Z', '2025-07-26T13:30:00.374Z', '{"acervus":"adipiscor","comitatus":"urbs","aurum":"tutamen"}'::jsonb, '61654575-605c-4bcd-a4c6-85cc706f813a');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('ce780de2-b7fa-4d38-805f-1277ee36f0dc', 'cancelled', '2024-05-29T13:23:07.178Z', '2024-05-31T09:18:48.845Z', '{"triumphus":"adeptio","spiculum":"voluptas","coma":"officiis","speciosus":"termes"}'::jsonb, 'bec5a06a-35dc-48f0-ad0a-52e2034b3976');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('cd93ee8f-6037-471d-afff-583c16fde59c', 'completed', '2026-02-05T11:51:56.898Z', '2026-01-12T19:10:26.100Z', '{"subvenio":"dicta","accendo":"crustulum","verecundia":"attonbitus"}'::jsonb, '532ed3b8-ebc8-4cd8-a821-ad391e688853');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('57811188-e8f1-4e76-af43-e6e0d64280f9', 'completed', '2025-05-19T03:58:05.764Z', '2025-01-18T06:32:58.082Z', '{"umbra":"armarium","subseco":"volaticus","cohaero":"sublime","tendo":"adflicto","reiciendis":"tolero"}'::jsonb, 'bec5a06a-35dc-48f0-ad0a-52e2034b3976');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('bdc57edb-b6a9-45d8-9049-a5617be41530', 'cancelled', '2025-10-17T09:24:55.293Z', '2025-12-30T20:50:05.165Z', '{"avaritia":"tamen","nisi":"xiphias","neque":"rerum","cultura":"cubitum","deinde":"circumvenio"}'::jsonb, '61994ae2-f749-4acf-b48d-c62f39330d34');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('35208f17-5dff-4ac5-a61f-7013a182de28', 'completed', '2024-05-08T23:14:50.168Z', '2025-07-18T22:40:44.404Z', '{"adfectus":"deduco","videlicet":"dignissimos","cupio":"distinctio"}'::jsonb, '532ed3b8-ebc8-4cd8-a821-ad391e688853');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('5b5ad397-bcd3-42cc-9800-4da6d48e1ead', 'failed', '2025-10-10T11:27:02.552Z', '2024-10-18T02:04:30.203Z', '{"vaco":"deserunt","tametsi":"turpis","abbas":"vix","beneficium":"uterque"}'::jsonb, '61994ae2-f749-4acf-b48d-c62f39330d34');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('755b958e-90a9-44ca-b4b8-a4cb6dc52990', 'cancelled', '2024-02-23T18:17:30.969Z', '2024-05-23T04:25:01.339Z', '{"degusto":"videlicet","nihil":"aequitas","tollo":"adopto"}'::jsonb, '2260cc0f-e8ea-403f-aa8f-7c3a72fcca9e');
INSERT INTO "Execution" ("id", "status", "startTime", "endTime", "result", "workflowId") VALUES ('9b0fb80c-f016-4813-8a06-2e8ae2a7d800', 'failed', '2025-05-15T04:12:41.178Z', '2026-01-22T11:39:57.400Z', '{"laborum":"deleniti","asper":"speculum","excepturi":"debitis","velociter":"averto","demulceo":"tondeo"}'::jsonb, 'bec5a06a-35dc-48f0-ad0a-52e2034b3976');

INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('087b6bf4-5948-4cc3-8b4b-a94bc646aa61', 'alert', 'Low disk space warning.', 'unread', 764, '5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('4bed119e-ba78-4520-8c0b-5cb439e8a514', 'warning', 'New update available.', 'archived', 628, '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('b757d5f1-ed7b-425d-903f-10a4504b371b', 'error', 'Agent created successfully.', 'archived', 448, 'db16a4f3-7506-4fae-be82-c244755dc4fa');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('376c7b49-2c9b-4bfe-bacf-a7c5f567284c', 'alert', 'Workflow execution failed.', 'unread', 676, '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('93e15195-a4c9-4b84-8662-36f464863b2c', 'info', 'Scheduled task completed.', 'archived', 548, '2ebd99eb-b53e-4244-b994-d603947d32f5');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('17d13817-47b1-4f50-afc9-b04553dd8bf8', 'alert', 'Low disk space warning.', 'unread', 965, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('c6b6db41-305d-43b3-b186-957e2a31d9af', 'error', 'Agent created successfully.', 'read', 338, 'c2714067-94df-4fa8-ae78-7a148ae8e2fc');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('649f6427-de91-453e-ae13-bf2b10f4ebbb', 'error', 'Scheduled task completed.', 'unread', 276, 'db16a4f3-7506-4fae-be82-c244755dc4fa');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('2a671ceb-0228-4357-ae04-ce4bf4681fe0', 'warning', 'New update available.', 'pending', 54, '97ca22e8-64ee-45dd-ac5d-14f975b2b03b');
INSERT INTO "Notification" ("id", "type", "message", "status", "priority", "userId") VALUES ('dbeb9015-a1f8-4773-97e3-34062b4b4240', 'success', 'Workflow execution failed.', 'unread', 948, '1b086dac-e781-4c33-a4a7-2fb58a392f33');

INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('cccaa0d7-8611-4c7a-a7f5-8abe0791f871', 'System Configuration', 'theme', 'enUS', '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('06367dc8-ee1c-45eb-a760-01e377c994d4', 'System Configuration', 'email_notifications', 'disabled', '067b8150-9da0-4c21-a0f8-471cc30913b8');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('128894e1-b5cb-4562-9c61-8273c4e3410c', 'User Preferences', 'email_notifications', 'enUS', 'c2714067-94df-4fa8-ae78-7a148ae8e2fc');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('fee6b795-9687-4a21-bf5f-de450756b182', 'System Configuration', 'data_sharing', 'enUS', '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('90eeb278-3e2e-4f6f-b6b5-52497883e3cc', 'API Integrations', 'data_sharing', 'dark', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('3a0dd4f9-16dc-4190-acc8-eb6107f26237', 'System Configuration', 'data_sharing', 'dark', '1b086dac-e781-4c33-a4a7-2fb58a392f33');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('4ef5f350-aa01-441c-bed2-7c38e71aef6a', 'System Configuration', 'api_key', 'dark', '97ca22e8-64ee-45dd-ac5d-14f975b2b03b');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('50540e5b-5301-419c-9be6-b29c54dddecc', 'Notification Settings', 'theme', 'enabled', '672a2539-3c16-4fd7-95f1-b6edfbfb2517');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('9a562662-bb61-410d-ba71-49b4a745b9ba', 'System Configuration', 'data_sharing', '12345abcde', '5fdf15ce-6f18-4021-9cf8-a92b8ad0a05c');
INSERT INTO "Setting" ("id", "category", "name", "value", "userId") VALUES ('6d0cbe3e-d169-47b8-b706-605d49fa2236', 'Privacy Controls', 'data_sharing', 'dark', '1b086dac-e781-4c33-a4a7-2fb58a392f33');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
