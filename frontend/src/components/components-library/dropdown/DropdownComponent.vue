<template>
  <div class="form-group form-group-default form-group-default-select2 full-width required">
    <label for="input">
      {{ label }}
      <input type="text" name="input" style="display: none">
    </label>
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <span
      class="select2 select2-container
      select2-container--default
      select2-container--below
      top-container"
      :class="dropdownIsOpen ? 'select2-container--open' : ''"
      v-on="dropdownIsOpen ? { click: closeDropdown }: { click: openDropdown } "
      dir="ltr">
      <span
        class="selection">
        <span
          class="select2-selection select2-selection--single"
          tabindex="0">
          <span
            v-for="(selectedElement, idx_selected_element) in selectedOptions"
            :key="idx_selected_element"
            class="select2-selection__rendered"
            id="select2-yuhb-container"
            :title="selectedElement"
            :class="multipleOptions ? 'multiple-options' : ''">
            <!-- eslint-disable -->
            <span
              v-if="multipleOptions == true"
              @click="removeElement(selectedElement)"
              class="remove-element">
              <i class="pg-close"></i>
            </span>
            <!-- eslint-enable -->
            <span class="selected-value">{{ selectedElement }}</span>
          </span>
          <span
            v-if="searchInput && searchInputInline"
            class="input-inline">
            <input
              class="select2-search__field"
              type="text"
              ref="autofocusInput"
              @keyup="searching"
              @focus="isFocus"
              @blur="notFocus">
          </span>
          <span class="select2-selection__arrow"
                role="presentation">
            <b role="presentation"></b>
          </span>
        </span>
      </span>
      <!-- dropdown start here -->
      <span
        class="dropdown-wrapper"
        v-click-outside="closeDropdown"
        :class="!dropdownIsOpen ? 'dropdown-hide' : ''">
        <span class="select2-container select2-container--default">
          <span class="select2-dropdown select2-dropdown--below"
                dir="ltr">
            <span
              v-if="searchInput && !searchInputInline"
              class="select2-search select2-search--dropdown">
              <input
                class="select2-search__field"
                type="text"
                ref="autofocusInput"
                @keyup="searching"
                @focus="isFocus"
                @blur="notFocus">
            </span>
            <span class="select2-results">
              <div class="scroll-wrapper select2-results__options"
                   style="position: relative;">
                <ul class="select2-results__options scroll-content scroll-scrolly_visible"
                    style="height: auto;
                    margin-bottom: 0px;
                    margin-right: 0px;
                    max-height: 200px;">
                  <!-- eslint-disable -->
                  <template
                    v-for="(opt, idx) in filteredOptions"
                    :key="idx">
                    <li
                      v-if="!!opt.title"
                      class="select2-results__option nested-options">
                      <strong class="select2-results__group">
                        {{ opt.title }}
                      </strong>
                      <ul class="select2-results__options select2-results__options--nested">
                        <li
                          v-for="(value, idx_value) in opt.values"
                          :key="idx_value"
                          class="select2-results__option"
                          :class="optionIsSelected(value) ? 'selected' : ''"
                          @click="addOrRemoveItem">
                          {{ value }}
                        </li>
                      </ul>
                    </li>
                    <li
                      v-else
                      class="select2-results__option no-nested-options"
                      :class="optionIsSelected(opt) ? 'selected' : ''"
                      @click="addOrRemoveItem">
                      {{ opt }}
                  </li>
                  </template>


                  <!-- eslint-enable -->
                </ul>
              </div>
            </span>
          </span>
        </span>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    label: {
      required: true,
      type: String,
      default: "Dropdown",
    },
    defaultOptions: {
      required: false,
      type: Array,
      default: [],
    },
    multipleOptions: {
      required: false,
      type: Boolean,
      default: true,
    },
    searchInput: {
      required: false,
      type: Boolean,
      default: true,
    },
    searchInputInline: {
      required: false,
      type: Boolean,
      default: false,
    },
    options: {
      required: true,
      type: [],
    },
  },
})
export default class DropdownComponent extends Vue {
  dropdownIsOpen = false;
  openingDropdown = false;
  inputFocus = false;
  selectedOptions: string[] = [];
  filteredOptions: any = [];

  beforeMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.filteredOptions = JSON.parse(JSON.stringify(this.options));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.selectedOptions = this.defaultOptions;
    this.update();
  }

  isFocus() {
    this.inputFocus = true;
  }

  notFocus() {
    this.inputFocus = false;
  }

  searching(event: any) {
    const searchString = event.target.value.toLowerCase();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.filteredOptions = JSON.parse(JSON.stringify(this.options));
    if (this.filteredOptions.length !== 0) {
      if (typeof this.filteredOptions[0] === "object") {
        this.filterOnObject(searchString);
      } else {
        this.filterOnArray(searchString);
      }
    }
  }

  filterOnObject(searchString: string) {
    this.filteredOptions.filter((option: any, index: number) => {
      // eslint-disable-next-line
      const filteredResults = option.values.filter((value: string) => {
        return value.toLowerCase().match(searchString);
      });
      this.filteredOptions[index].values = filteredResults;
      return filteredResults;
    });
  }

  filterOnArray(searchString: string) {
    // eslint-disable-next-line
    const filteredResults = this.filteredOptions.filter((value: string) => {
      return value.toLowerCase().match(searchString);
    });
    this.filteredOptions = filteredResults;
    return filteredResults;
  }

  // eslint-disable-next-line class-methods-use-this
  addOrRemoveItem(event: any) {
    const selected = event.target.textContent;
    const result = this.selectedOptions.filter((item: string) => item === selected);
    if (result.length === 0) {
      /**
       * Allow only one item selected
       */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (this.selectedOptions.length !== 0 && this.multipleOptions === false) {
        // add curent and remove preivous
        this.selectedOptions = [];
        this.addSelectedElement(selected);
        return;
      }
      console.log(
        "this.selectedElements.length !== 0 && this.multipleOptions === false",
        (this.selectedOptions.length !== 0
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          && this.multipleOptions === false),
      );
      this.addSelectedElement(selected);
    } else {
      this.removeSelectedElement(selected);
    }
    // To keep dropdown open
    this.openDropdown();
  }

  optionIsSelected(element: string) {
    const isSelected = this.selectedOptions.filter((item: string) => item === element);
    return isSelected.length;
  }

  addSelectedElement(element: string) {
    this.selectedOptions.push(element);
    this.update();
  }

  removeSelectedElement(element: string) {
    this.selectedOptions = this.selectedOptions.filter((item: string) => item !== element);
    this.update();
  }

  update() {
    console.log("EMIT :", this.selectedOptions);
    this.$emit('selectedOptions', this.selectedOptions);
  }

  removeElement(element: string) {
    this.removeSelectedElement(element);
  }

  openDropdown() {
    this.dropdownIsOpen = true;
    this.openingDropdown = true;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$nextTick(() => this.$refs.autofocusInput.focus());
    this.preventCloseDropdown();
  }

  preventCloseDropdown() {
    // To prevent opening and closing immediately
    setTimeout(() => {
      this.openingDropdown = false;
    }, 10);
  }

  closeDropdown() {
    if (this.openingDropdown === true || this.inputFocus === true) return;
    this.dropdownIsOpen = false;
    this.inputFocus = false;
  }
}
</script>

<style scoped lang="scss">
ul > li, ol > li {
  padding-left: 3px;
  line-height: 24px;
}
label, input, button, select, textarea {
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
}
.form-group-default {
  z-index: 1;
  border: 0px !important;
  &.form-group-default-select2 {
    padding: 0;
    .select2-container {
      .select2-selection--single {
        padding-top: 20px;
        min-height: 58px;
        height: 100%;
      }
    }
  }
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  position: relative;
  border: 1px solid rgba(33, 33, 33, 0.14);
  border-top-color: rgba(8, 7, 7, 0.14);
  border-radius: 2px;
  padding-top: 5px;
  padding-left: 9px;
  padding-right: 9px;
  padding-bottom: 4px;
  overflow: visible;
  width: 100%;
  -webkit-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  cursor: text;

  label {
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif, sans-serif;
    letter-spacing: -0.006em;
    margin: 0;
    display: block;
    opacity: 1;
    cursor: text;
    -webkit-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;
  }
  & > label {
    position: absolute;
    z-index: 10;
    padding: 5px 12px 0 9px;
    color: #757575;
    &:not(.error) {
      color: #4b4b4b;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .full-width + .select2-container {
    width: 100% !important;
  }
  .select2-container {
    position: relative;
    vertical-align: middle;
    box-sizing: border-box;
    display: block;
    margin: 0;
    width: 100%;
    &.top-container {
      border: 1px solid rgba(33, 33, 33, 0.14);
      min-height: 59px;
    }
    &.select2-container--default {
      .select2-selection--single {
        border-width: 0px;
        .select2-selection__rendered {
          color: #444;
          line-height: 28px;
        }
        .select2-selection__arrow {
          height: 26px;
          position: absolute;
          width: 20px;

          b {
            border-color: #888 transparent transparent transparent;
            border-style: solid;
            border-width: 5px 4px 0 4px;
            height: 0;
            left: 50%;
            margin-left: -4px;
            margin-top: -2px;
            position: absolute;
            top: 50%;
            width: 0;
          }
        }
      }
      .select2-results {
        .scroll-wrapper {
          overflow: hidden !important;
          padding: 0 !important;
          position: relative;
          .select2-results__options {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          & > .scroll-content {
            height: auto;
            max-height: 200px;
            box-sizing: inherit !important;
            border: none !important;
            height: auto;
            left: 0;
            margin: 0;
            max-width: none !important;
            overflow: scroll !important;
            padding: 0;
            position: relative !important;
            top: 0;
            width: auto !important;
          }
        }
        & >.select2-results__options {
          max-height: 200px;
          overflow-y: auto;
          list-style: none;
          margin: 0;
        }
      }
      .select2-results__group {
        color: #212121;
        cursor: default;
        display: block;
        padding: 6px;
        font-weight: bolder;
      }
      .select2-results__option{
        &.nested-options {
          .select2-results__option {
            padding: 6px;
            user-select: none;
            -webkit-user-select: none;
            cursor: pointer;
            &.selected {
              background-color: #f4f4f4 !important;
              border-radius: 3px;
              color: #4b4b4b !important;
            }
            &:hover {
              background-color: #f4f4f4 !important;
              border-radius: 3px;
              color: #4b4b4b !important;
            }
          }
        }
        &.no-nested-options {
          padding: 6px;
          user-select: none;
          -webkit-user-select: none;
          cursor: pointer;
          &.selected {
            background-color: #f4f4f4 !important;
            border-radius: 3px;
            color: #4b4b4b !important;
          }
          &:hover {
            background-color: #f4f4f4 !important;
            border-radius: 3px;
            color: #4b4b4b !important;
          }
        }
      }
    }

    .select2-selection--single {
      position: relative;
      display: block;
      padding-top: 20px;
      height: 100%;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      width: 100%;
      overflow: scroll;

      &::after {
        content: "";
        clear: both;
      }
      .select2-selection__rendered {
        padding-left: 8px;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        margin-bottom: 5px;
        margin-top: 8px;

        .selected-value {
        line-height: 21px;
        }
      }
    }

    &.select2-container--open {
      box-shadow: none;
      border: 1px solid #7252D3 !important;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
    .select2-selection {
      position: relative;
      display: block;
      background-image: none;
      border-radius: 2px;
      border: 1px solid rgba(33, 33, 33, 0.14);
      padding: 2px 9px;
      transition: border 0.2s linear 0s;
      min-height: 35px;

      .select2-selection__rendered {
        padding: 0;
        display: flex;
        align-items: center;
        margin-right: 10px;
        &.multiple-options {
          display: flex;
          align-items: center;
          background-color: #e0e0e0;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 15px;
          line-height: 21px;
          .remove-element {
            display: flex;
            margin-right: 0px;
            margin-top: -3px;
          }
        }
      }

      .input-inline {
        display: inline-flex;
        margin-top: 8px;
        float: left;
        input {
          width: 100%;
          background: transparent;
          border: none;
          outline: 0;
          box-shadow: none;
          -webkit-appearance: textfield;
          box-sizing: border-box;
          font-size: 100%;
          margin-top: 5px;
          padding: 0;
          background-image: none !important;
          outline-offset: -2px;
          font-weight: normal;
          line-height: 20px;
          overflow: visible;
          margin: 0;
          font-family: inherit;
        }
      }

      .select2-selection__arrow {
        bottom: 5px;
        right: 10px;
        left: auto;
        background: transparent;
        border-left: 0px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
    }

    .dropdown-wrapper {
      position: absolute;
      width: 100%;
      top: calc(100% + 1px);
      left: -1px;
      right: 0;
      border: 1px solid rgba(33, 33, 33, 0.14);
      box-shadow: 0 4px 5px rgb(0 0 0 / 15%);
      box-sizing: content-box;
      background-color: #fff;
      &.dropdown-hide {
        display: none;
      }
      .select2-container {
        box-sizing: border-box;
        display: block;
        margin: 0;
        width: 100%;
        position: relative;
        vertical-align: middle;

        .select2-dropdown {
          display: block;
          position: relative;
          width: 100%;
          background-color: white;
          box-sizing: border-box;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          padding-top: 5px;
          .select2-search--dropdown {
            display: block;
            padding: 4px 8px;

            input {
              background: #fff !important;
              vertical-align: baseline;
              line-height: 28px;
              border-radius: 2px;
              border: none;
              font-size: 12px;
              border: 1px solid rgba(33, 33, 33, 0.14) !important;
              &.select2-search__field {
                padding: 4px;
                width: 100%;
                box-sizing: border-box;
              }
            }
          }

          .select2-results {
            display: block;
            margin: 3px 8px 10px 8px;
          }
        }
        &.select2-container--open{
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          z-index: 10;
          .select2-dropdown {
            top: 1px;
            left: 0;
          }
          .select2-dropdown--below {
            border-top: none;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
        }
      }
    }
  }
}
</style>
