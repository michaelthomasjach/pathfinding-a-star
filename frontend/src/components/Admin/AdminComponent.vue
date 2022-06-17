<template>
  <div>
    <CardComponent>
      <div class="col-lg-6">
        <DropdownComponent
          :options="dropdownOptions"
          v-model="selected"/>
      </div>
      <div class="col-lg-6">
        <DropdownComponent
          :multiple-options="true"
          :options="dropdownOptions2"
          v-model="selected"/>
      </div>
    </CardComponent>
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
      <div class="col-lg-4">
        <h5>Checkboxes</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
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
      </div>
      <div class="col-lg-4">
        <h5>Checkboxes circle</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
        <CheckboxComponent
          label="Danger checkbox circle checked"
          color="danger"
          type="checkbox-circle"
          checked
        />
        <CheckboxComponent
          label="Complete checkbox circle disabled"
          color="primary"
          type="checkbox-circle"
          checked
          disabled
        />
        <CheckboxComponent
          label="Complete checkbox circle"
          color="complete"
          type="checkbox-circle"
        />
      </div>
      <div class="col-lg-4">
        <h5>Switch</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
        <CheckboxComponent
          label="Primary checkbox indeterminate"
          color="primary"
          type="checkbox"
          indeterminate
        />
      </div>
      <div class="row"></div>
      <div class="col-lg-4">
        <h5>Switch</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
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
      </div>

      <div class="col-lg-4">
        <h5>Radio connected</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
        <InputGroupComponent
          :options="decisions"
          v-model="selected"/>
      </div>

      <div class="col-lg-4">
        <h5>States</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</p>
        <br>
        <CheckboxComponent
          label="Radio"
          value="Radio"
          type="radio"
        />
        <CheckboxComponent
          label="Radio checked primary"
          value="Radio checked primary"
          color="primary"
          type="radio"
          checked
        />
        <CheckboxComponent
          label="Radio checked primary disabled"
          value="Radio checked primary disabled"
          color="primary"
          type="radio"
          disabled
        />
      </div>
    </CardComponent>
    <CardComponent title="Infos de l'utilisateur">
      {{ getUser }}
      <button @click="changeUserInformations()">changeUserInformations</button>
    </CardComponent>

    <CardComponent>
      selectedValue: {{ selectedValue }}
      <InputGroupComponent
        :options="decisions"
        v-model="selected"/>
    </CardComponent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action, Getter } from "s-vuex-class";
import InputComponent from "@/components/components-library/input/InputComponent.vue";
import InputGroupComponent from "@/components/components-library/checkbox/InputGroupComponent.vue";
import CardComponent from "@/components/components-library/card/CardComponent.vue";
import CheckboxComponent from "@/components/components-library/checkbox/CheckboxComponent.vue";
import DropdownComponent from "@/components/components-library/dropdown/DropdownComponent.vue";

@Options({
  components: {
    InputComponent,
    CardComponent,
    CheckboxComponent,
    InputGroupComponent,
    DropdownComponent,
  },
})
export default class AdminComponent extends Vue {
  @Getter("getUser") getUser: any;
  @Action("requestUserInformations") requestUserInformations: any;

  decisions = ["Yes", "No", "Undecided"];
  selected = "";

  dropdownOptions = [
    {
      title: "Alaskan / Hawaiian Time Zone",
      values: [
        "Alaska",
        "Hawaii",
      ],
    },
    {
      title: "Pacific Time Zone",
      values: [
        "California",
        "Nevada",
        "Oregon",
        "Washington",
      ],
    },
  ];

  dropdownOptions2 = [
    "Value 3",
    "Value 4",
  ]

  get selectedValue() {
    return this.selected;
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
}
</script>
