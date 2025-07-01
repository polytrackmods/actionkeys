import { PolyMod, MixinType, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class incMod extends PolyMod {
    steerAmount = 1;
    
    init = function(pml) {
      pml.registerKeybind("Steer 10%", "10steer", "keydown", "Digit1", (e) => {this.steerAmount = 0.1});
      pml.registerKeybind("Steer 20%", "20steer", "keydown", "Digit2", (e) => {this.steerAmount = 0.2});
      pml.registerKeybind("Steer 30%", "30steer", "keydown", "Digit3", (e) => {this.steerAmount = 0.3});
      pml.registerKeybind("Steer 40%", "40steer", "keydown", "Digit4", (e) => {this.steerAmount = 0.4});
      pml.registerKeybind("Steer 50%", "50steer", "keydown", "Digit5", (e) => {this.steerAmount = 0.5});
      pml.registerKeybind("Steer 60%", "60steer", "keydown", "Digit6", (e) => {this.steerAmount = 0.6});
      pml.registerKeybind("Steer 70%", "70steer", "keydown", "Digit7", (e) => {this.steerAmount = 0.7});
      pml.registerKeybind("Steer 80%", "80steer", "keydown", "Digit8", (e) => {this.steerAmount = 0.8});
      pml.registerKeybind("Steer 90%", "90steer", "keydown", "Digit9", (e) => {this.steerAmount = 0.9});

      pml.registerSimWorkerFuncMixin("s_", MixinType.INSERT, `g = f < 0 && m < 0 ? Math.min(f, m) : f > 0 && m > 0 ? Math.max(f, m) : f + m,`, `
        g = g * ActivePolyModLoader.getMod("${this.modID}").steerAmount;
      `)

    }
}
export const polyMod = new incMod();
