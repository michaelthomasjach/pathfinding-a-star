<template>
  <div>
    <CardComponent title="Input">
      <h4>Exemples d'input disponibles</h4>
      <p>Pages Form Elements reshaped the conventional text-fields in aim to improve usability and
        create a fun, unique and exciting experience.</p>

      <InputComponent label="Normal" input-type="text"/>
      <InputComponent label="Disabled" input-type="text" disabled/>
      <InputComponent label="Required" input-type="text" required/>
      <InputComponent label="Password" input-type="password"/>
      <InputComponent label="Email" input-type="email"/>
      <InputComponent
        label="Placeholder"
        placeholder="Lorem ipsum dolor sit amet."
        input-type="text"/>
      <InputComponent
        label="Value"
        value="Lorem ipsum dolor sit amet."
        input-type="text"/>
    </CardComponent>

    <CardComponent title="Checkbox">
      <CheckboxComponent
        label="Default checkbox"/>
      <CheckboxComponent
        label="Primary checkbox"
        color="primary"
      />
      <CheckboxComponent
        label="Complete checkbox checked"
        color="complete"
        checked
      />
      <CheckboxComponent
        label="Primary checkbox indeterminate"
        color="primary"
        indeterminate
      />
    </CardComponent>
    <TextAeraComponent label="test" input-type="text"/>

    <CardComponent title="Infos de l'utilisateur">
      {{ getUser }}
    </CardComponent>
    <button @click="changeUserInformations()">changeUserInformations</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";
import InputComponent from "@/components/components-library/input/InputComponent.vue";
import CardComponent from "@/components/components-library/card/CardComponent.vue";
import CheckboxComponent from "@/components/components-library/checkbox/CheckboxComponent.vue";

@Options({
  components: {
    InputComponent,
    CardComponent,
    CheckboxComponent,
  },
})
export default class AdminComponent extends Vue {
  @Getter("getUser") getUser: any;
  @Action("requestUserInformations") requestUserInformations: any;

  changeUserInformations() {
    if (this.$store.getters.getUser === undefined) {
      console.warn("Vous devez être connecté pour effectuer cette action.");
      return;
    }
    this.requestUserInformations({
      token: this.$store.getters.getUser.token,
    }).then((res: any) => {
      console.log("RESPONSE :", res);
    });
  }
}
</script>
