<template>
  <div class="resume-wrapper">
    <div class="left-side">
      <div class="location">
        <div class="vertical-bar">
          <span class="icon material-icons">person_pin_circle</span>
          <div class="adress">Toulouse</div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="resume-header">
        <div class="resume-picture"></div>
        <div class="personal-informations">
          <div class="mail">
            <span class="icon material-symbols-outlined">mail</span>
            <span>michael.thomas.jach@gmail.com</span>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <div class="resume-section-title">
          <div class="title">
            Profil
          </div>
        </div>
      </div>
      <div>{{ msg }}</div>
    </div>
    <!--
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>Component du CV</div>
    -->
  </div>

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HomePage extends Vue {
  get msg(): string {
    return this.msg;
  }
}
</script>

<style lang="scss">
.icon {
  font-size: 22px;
}

.resume-wrapper {
  position: relative;
  .left-side {
    position: absolute;
    top: 0;
    left: 0;
    width: 450px;
    background-color: #CAC9C7;
    min-height: 500px;

    .location {
      position: relative;
      display: block;
      width: 100%;
      .vertical-bar {
        position: absolute;
        top: 0px;
        left: 150px;
        width: 20px;
        height: 165px;
        background-color: #5C5C5E;

        .icon {
          position: absolute;
          left: 0px;
          bottom: 10px;
          color: white;
        }
        .adress {
          position: absolute;
          bottom: 10px;
          left: 35px;
        }
      }
    }
  }
  .right-side {
    position: absolute;
    top: 0;
    left: 450px;
    right: 0px;
    background-color: #E6E4E7;
    min-height: 500px;

    .resume-header {
      position: relative;
      display: flex;
      .resume-picture::before {
        position: relative;
        display: flex;
        content: "";
        width: 200px;
        height: 310px;
        background-image: url("@/assets/resume/mike-1-couleur.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: grayscale(200%);
        margin-right: 60px;
      }
      .personal-informations {
        align-self: flex-end;
        .mail {
          display: flex;
          .icon {
            margin-right: 50px;
          }
        }
      }
    }

    .resume-section {
      position: relative;
      display: block;
      margin-top: 50px;
      text-align: left;
      width: 100%;

      .resume-section-title {
        position: relative;
        display: block;
        font-size: 30px;
        text-transform: uppercase;

        .title {
          margin-left: 75px;
          font-weight: 900;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          height: 3px;
          width: 150px;
          background-color: #5C5C5E;
        }
      }
    }
  }
}
</style>
