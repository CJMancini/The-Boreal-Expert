onEvent("ui.main_menu", (event) => {
    event.replace((ui) => {
  
      ui.background("stu:textures/ui/bg.png");
  
      //Paypal
      ui.image((i) => {
        i.height = 400 * 0.000120 * ui.h;
        i.width = 1500 * 0.000120 * ui.h;
        i.x = ui.width*0.02;
        i.y = ui.height/1.1;
        i.texture = "stu:textures/ui/paypal.png";
        i.hoverTexture = "stu:textures/ui/paypal_hover.png";
        i.action = "https://paypal.me/veydiztech";
      });
  
      //Discord
      ui.image((i) => {
        i.height = 400 * 0.000190 * ui.h;
        i.width = 400 * 0.000190 * ui.h;
        i.x = ui.width*(0.4/4);
        i.y = ui.height/2.5;
        i.texture = "stu:textures/ui/discord.png";
        i.hoverTexture = "stu:textures/ui/discord_hover.png";
        i.action = "https://discord.gg/N2VCk7rYTG";
      });
      //Bisect
      ui.image((i) => {
        i.height = 400 * 0.000190 * ui.h;
        i.width = 400 * 0.000190 * ui.h;
        i.x = ui.width*(0.8/4);
        i.y = ui.height/2.5;
        i.texture = "stu:textures/ui/bisect.png";
        i.hoverTexture = "stu:textures/ui/bisect_hover.png";
        i.action = "https://www.bisecthosting.com/veydiz";
      });
      //language
      ui.image((i) => {
        i.height = 400 * 0.000190 * ui.h;
        i.width = 400 * 0.000190 * ui.h;
        i.x = ui.width*(3.0/4);
        i.y = ui.height/2.5;
        i.texture = "stu:textures/ui/lang.png";
        i.hoverTexture = "stu:textures/ui/lang_hover.png";
        i.action = "minecraft:language";
      });
      //quit
      ui.image((i) => {
        i.height = 400 * 0.000190 * ui.h;
        i.width = 400 * 0.000190 * ui.h;
        i.x = ui.width*(3.4/4);
        i.y = ui.height/2.5;
        i.texture = "stu:textures/ui/quit.png";
        i.hoverTexture = "stu:textures/ui/quit_hover.png";
        i.action = "minecraft:quit";
      });
  
  
      //Singleplayer
      ui.image((i) => {
        i.height = 400 * 0.000180 * ui.h;
        i.width = ui.width/4;
        i.x = ((ui.width/2)-i.width-((ui.width/2-i.width)/2))*0.43;
        i.y = ui.height/7.5;
        i.texture = "stu:textures/ui/sp.png";
        i.hoverTexture = "stu:textures/ui/sp_hover.png";
        i.action = "minecraft:singleplayer";
      });
      //multiplayer
      ui.image((i) => {
        i.height = 400 * 0.000180 * ui.h;
        i.width = ui.width/4;
        i.x = ((ui.width/2)-i.width-((ui.width/2-i.width)/2))*0.43;
        i.y = ui.height/4;
        i.texture = "stu:textures/ui/mp.png";
        i.hoverTexture = "stu:textures/ui/mp_hover.png";
        i.action = "minecraft:multiplayer";
      });
      //options
      ui.image((i) => {
        i.height = 400 * 0.000180 * ui.h;
        i.width = ui.width/4;
        i.x = (ui.width-i.width)-((ui.width/2-i.width)/2)*0.40;
        i.y = ui.height/7.5;
        i.texture = "stu:textures/ui/options.png";
        i.hoverTexture = "stu:textures/ui/options_hover.png";
        i.action = "minecraft:options";
      });
      //mods
      ui.image((i) => {
        i.height = 400 * 0.000180 * ui.h;
        i.width = ui.width/4;
        i.x = (ui.width-i.width)-((ui.width/2-i.width)/2)*0.40;
        i.y = ui.height/4;
        i.texture = "stu:textures/ui/mods.png";
        i.hoverTexture = "stu:textures/ui/mods_hover.png";
        i.action = "forge:mod_list";
      });
  
  
  
  
  
      //Mojang
      ui.label((l) => {
        l.height = 7;
        l.name = Text.of("Minecraft, © Mojang AB, Do not distribute").color(
          0xffffff
        );
        l.x = ui.width - l.width - 3;
        l.y = ui.height - 7;
        l.shadow = true;
      });
    });
  });
  