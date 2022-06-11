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
        type="checkbox"
        checked
      />
      <CheckboxComponent
        label="Complete checkbox checked disabled"
        color="complete"
        type="checkbox"
        checked
        disabled
      />
      <CheckboxComponent
        label="Primary checkbox indeterminate"
        color="primary"
        type="checkbox"
        indeterminate
      />
      <CheckboxComponent
        label="Switch"
        color="primary"
        type="switch"
      />
      <CheckboxComponent
        label="Switch large"
        color="primary"
        type="switch-lg"
      />
      <CheckboxComponent
        label="Switch large checked"
        color="complete"
        type="switch-lg"
        checked
      />
      <CheckboxComponent
        label="Switch large checked disabled"
        color="complete"
        type="switch-lg"
        checked
        disabled
      />
      <CheckboxComponent
        label="Radio"
        type="radio"
      />
      <CheckboxComponent
        label="Radio checked"
        color="complete"
        type="radio"
        checked
      />
      <CheckboxComponent
        label="Radio disabled"
        color="primary"
        type="radio"
        checked
      />
      <CheckboxComponent
        label="Radio disabled"
        color="primary"
        type="radio"
        checked
        disabled
      />
    </CardComponent>

    <div>
      <div class="radio-button-group">
        => {{ getDecision }}
        <InputGroupComponent
          :options="options"
          @input="inputEventHandler"/>
      </div>
    </div>

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
import InputGroupComponent from "@/components/components-library/checkbox/InputGroupComponent.vue";
import CardComponent from "@/components/components-library/card/CardComponent.vue";
import CheckboxComponent from "@/components/components-library/checkbox/CheckboxComponent.vue";

@Options({
  components: {
    InputComponent,
    CardComponent,
    CheckboxComponent,
    InputGroupComponent,
  },
})
export default class AdminComponent extends Vue {
  @Getter("getUser") getUser: any;
  @Action("requestUserInformations") requestUserInformations: any;

  decision = '';
  options = ['Yes', 'No', 'Undecided'];

  mounted() {
    setInterval(() => {
      console.log("FROM PARENT BOUCLE :", this.decision);
    }, 1000);
  }

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

  get getDecision() {
    return this.decision;
  }

  inputEventHandler(value: string) {
    console.log("FROM PARENT :", value);
    this.$emit('input', value);
    this.decision = value;
  }
}
</script>
