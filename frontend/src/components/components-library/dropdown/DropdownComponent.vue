<template>
  <div class="form-group form-group-default form-group-default-select2 full-width required">
    <label for="input">Project
      <input type="text" name="input" style="display: none">
    </label>
    <span
      class="select2 select2-container select2-container--default select2-container--below"
      dir="ltr"
      style="width: 500px;">
      <span class="selection">
        <span
          class="select2-selection select2-selection--single"
          tabindex="0">
          <span class="select2-selection__rendered"
                id="select2-yuhb-container"
                title="Alaska">Alaska</span>
          <span class="select2-selection__arrow"
                role="presentation">
            <b role="presentation"></b>
          </span>
        </span>
      </span>
      <!-- dropdown start here -->
      <span class="dropdown-wrapper">
        <span class="select2-container select2-container--default select2-container--open">
          <span class="select2-dropdown select2-dropdown--below"
                dir="ltr">
            <span class="select2-search select2-search--dropdown">
              <input class="select2-search__field"
                     type="search"
                     tabindex="0"
                     autocomplete="off"
                     autocorrect="off"
                     autocapitalize="off"
                     spellcheck="false"
                     role="textbox">
            </span>
            <span class="select2-results">
              <div class="scroll-wrapper select2-results__options"
                   style="position: relative;">
                <ul class="select2-results__options scroll-content scroll-scrolly_visible"
                    role="tree"
                    id="select2-yuhb-results"
                    aria-expanded="true"
                    aria-hidden="false"
                    style="height: auto;
                    margin-bottom: 0px;
                    margin-right: 0px;
                    max-height: 200px;">
                  <li class="select2-results__option"
                      role="group"
                      aria-label="Alaskan/Hawaiian Time Zone">
                    <strong class="select2-results__group">
                      Alaskan/Hawaiian Time Zone
                    </strong>
                    <ul class="select2-results__options select2-results__options--nested">
                      <li class="select2-results__option select2-results__option--highlighted"
                          id="select2-yuhb-result-xx1f-AK"
                          role="treeitem"
                          aria-selected="true">
                        Alaska
                      </li>
                      <li class="select2-results__option selected"
                          id="select2-yuhb-result-tej2-HI"
                          role="treeitem"
                          aria-selected="false">
                        Hawaii
                      </li>
                    </ul>
                  </li>
                  <li class="select2-results__option"
                      role="group"
                      aria-label="Pacific Time Zone">
                    <strong class="select2-results__group">
                      Pacific Time Zone
                    </strong>
                    <ul class="select2-results__options select2-results__options--nested">
                      <li class="select2-results__option"
                          id="select2-yuhb-result-5gqq-CA"
                          role="treeitem"
                          aria-selected="false">
                        California
                      </li>
                      <li class="select2-results__option"
                          id="select2-yuhb-result-765i-NV"
                          role="treeitem"
                          aria-selected="false">
                        Nevada
                      </li>
                      <li class="select2-results__option"
                          id="select2-yuhb-result-3p46-OR"
                          role="treeitem"
                          aria-selected="false">
                        Oregon
                      </li>
                      <li class="select2-results__option"
                          id="select2-yuhb-result-qpqq-WA"
                          role="treeitem"
                          aria-selected="false">
                        Washington
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="scroll-element scroll-x scroll-scrolly_visible"
                     style=""><div class="scroll-element_outer">
                  <div class="scroll-element_size"></div>
                  <div class="scroll-element_track"></div>
                  <div class="scroll-bar"
                       style="width: 89px;">
                  </div>
                </div>
                </div>
                <div class="scroll-element scroll-y scroll-scrolly_visible" style="">
                  <div class="scroll-element_outer">
                    <div class="scroll-element_size"></div>
                    <div class="scroll-element_track"></div>
                    <div class="scroll-bar" style="height: 136px;top: 0px;"></div>
                  </div>
                </div>
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
    title: String,
  },
})
export default class DropdownComponent extends Vue { }
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
  z-index: 10;
  &.form-group-default-select2 {
    padding: 0;
    .select2-container .select2-selection--single {
      padding-top: 20px;
      height: 52px;
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
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle;
    &.select2-container--default {
      .select2-selection--single {
        background-color: #fff;
        border: 1px solid #aaa;
        border-radius: 4px;
        .select2-selection__rendered {
          color: #444;
          line-height: 28px;
        }
        .select2-selection__arrow {
          height: 26px;
          position: absolute;
          top: 1px;
          right: 1px;
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
    }

    .select2-selection--single {
      padding-top: 20px;
      height: 52px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      .select2-selection__rendered {
        display: block;
        padding-left: 8px;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .select2-selection {
      background-image: none;
      border-radius: 2px;
      border: 1px solid rgba(33, 33, 33, 0.14);
      padding: 2px 9px;
      transition: border 0.2s linear 0s;
      min-height: 35px;
      display: flex;
      align-items: center;

      .select2-selection__rendered {
        padding: 0;
        display: flex;
        align-items: center;
      }

      .select2-selection__arrow {
        top: auto;
        bottom: 5px;
        right: 10px !important;
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
      left: 0;
      right: 0;
      .select2-container {
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        width: 100%;
        position: relative;
        vertical-align: middle;

        .select2-dropdown {
          width: 100%;
          background-color: white;
          box-sizing: border-box;
          display: block;
          position: absolute;
          border: 1px solid rgba(33, 33, 33, 0.14);
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          padding-top: 5px;
          z-index: 790;
          box-shadow: 0 4px 5px rgb(0 0 0 / 15%);
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
