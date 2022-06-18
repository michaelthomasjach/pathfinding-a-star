<template>
  <div>
    <CardComponent title="Sélectionner le CV a éditer">
      <div class="row">
        <div class="col-lg-3">
          <DropdownComponent
            label="Nom du CV"
            :multiple-options="false"
            :options="listResumeAvailable"
            @selectedOptions="updateSelectedOptions2"/>
        </div>
      </div>
    </CardComponent>
    <CardComponent title="Information du CV">
      <h4>Les informations remplies seront affichées sur le CV</h4>
      <p>Il est possible de rajouter de nouvelles sections sur le CV
        en cliquant sur le bouton "Ajouter section" en bas de la page.</p>

      Value : {{ inputValue }}
      <div class="col-lg-6">
        <InputComponent
          label="Prénom"
          input-type="text"
          :value="inputValue"
          v-model="inputValue"/>
        <InputComponent
          label="Nom"
          input-type="text"
          :value="inputValue"
          v-model="inputValue"/>
        <InputComponent
          label="Age"
          input-type="text"
          :value="inputValue"
          v-model="inputValue"/>
      </div>
      <div class="col-lg-6">
        <InputComponent
          label="Email"
          input-type="email"
          :value="inputValue"
          v-model="inputValue"/>
        <InputComponent
          label="Linkedin"
          input-type="text"
          :value="inputValue"
          v-model="inputValue"/>
        <InputComponent
          label="Github"
          input-type="text"
          :value="inputValue"
          v-model="inputValue"/>
      </div>
      <InputComponent
        label="Disabled"
        input-type="text"
        disabled
        :value="inputValue"
        v-model="inputValue"/>
      <InputComponent
        label="Required"
        input-type="text"
        required
        :value="inputValue"
        v-model="inputValue"/>
      <InputComponent
        label="Password"
        input-type="password"
        :value="inputValue"
        v-model="inputValue"/>
      <InputComponent
        label="Email"
        input-type="email"
        :value="inputValue"
        v-model="inputValue"/>
      <InputComponent
        label="Placeholder"
        placeholder="Lorem ipsum dolor sit amet."
        input-type="text"
        :value="inputValue"
        v-model="inputValue"/>
      <InputComponent
        label="Value"
        input-type="text"
        :value="inputValue"
        v-model="inputValue"/>
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
import TextAeraComponent from "@/components/components-library/input/TextAeraComponent.vue";
import DropzoneComponent from "@/components/components-library/dropzone/DropzoneComponent.vue";

@Options({
  components: {
    DropzoneComponent,
    TextAeraComponent,
    InputComponent,
    CardComponent,
    CheckboxComponent,
    InputGroupComponent,
    DropdownComponent,
  },
})
export default class ResumeComponent extends Vue {
  @Getter("getUser") getUser: any;
  @Action("requestUserInformations") requestUserInformations: any;

  decisions = ["Yes", "No", "Undecided"];
  selected = "";
  selectedOptions = "";
  selectedOptions2 = "";
  textaeraValue = "Default value textaera";
  inputValue = "Default Value input";

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

  listResumeAvailable = [
    "Michael Jach",
    "Ana Villena",
  ]

  get selectedValue() {
    return this.selected;
  }

  // eslint-disable-next-line class-methods-use-this
  updateSelectedOptions(event: any) {
    console.log("event", event);
    this.selectedOptions = event;
  }

  updateSelectedOptions2(event: any) {
    console.log("event", event);
    this.selectedOptions2 = event;
  }

  updateContentTextaera(event: any) {
    console.log("event", event);
    this.textaeraValue = event;
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
