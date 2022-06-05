import Store from "@/store/Store"; // path to store file
import User from "./store/modules/user/User";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<User>;
  }
}
