import { PolyMod, MixinType, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class incMod extends PolyMod {
    steerAmount = 1;
    
    init = function(pml) {
      pml.registerSettingCategory("Action Key Bindings");
      pml.registerKeybind("Steer 10%", "steer10", "keydown", "Digit1", "", (e) => {this.steerAmount = 0.1});
      pml.registerKeybind("Steer 20%", "steer20", "keydown", "Digit2", "", (e) => {this.steerAmount = 0.2});
      pml.registerKeybind("Steer 30%", "steer30", "keydown", "Digit3", "", (e) => {this.steerAmount = 0.3});
      pml.registerKeybind("Steer 40%", "steer40", "keydown", "Digit4", "", (e) => {this.steerAmount = 0.4});
      pml.registerKeybind("Steer 50%", "steer50", "keydown", "Digit5", "", (e) => {this.steerAmount = 0.5});
      pml.registerKeybind("Steer 60%", "steer60", "keydown", "Digit6", "", (e) => {this.steerAmount = 0.6});
      pml.registerKeybind("Steer 70%", "steer70", "keydown", "Digit7", "", (e) => {this.steerAmount = 0.7});
      pml.registerKeybind("Steer 80%", "steer80", "keydown", "Digit8", "", (e) => {this.steerAmount = 0.8});
      pml.registerKeybind("Steer 90%", "steer90", "keydown", "Digit9", "", (e) => {this.steerAmount = 0.9});

      pml.registerSimWorkerFuncMixin("s_", MixinType.INSERT, `g = f < 0 && m < 0 ? Math.min(f, m) : f > 0 && m > 0 ? Math.max(f, m) : f + m,`, `
        g = g * ActivePolyModLoader.getMod("${this.modID}").steerAmount;
      `)

    }
}
export const polyMod = new incMod();
