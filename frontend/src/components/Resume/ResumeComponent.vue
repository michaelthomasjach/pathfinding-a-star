<template>
  <div class="resume-wrapper">
    <div class="left-side">
      <div class="location">
        <div class="vertical-bar">
          <span class="icon material-icons">person_pin_circle</span>
          <div class="adress">Toulouse</div>
        </div>
      </div>
      <div class="left-side-content-align">
        <div class="name">Michael<br/>Jach</div>
        <div class="resume-section-wrapper">
          <div class="resume-section-title">
            <div class="title">
              Education
            </div>
          </div>
          <div class="subtitle">Ingénieur</div>
          <div class="subtitle">CESI</div>
          <div class="subtitle">2013-2018</div>

          <div class="subtitle m-t-50">BTS GC</div>
          <div class="subtitle">Lycée Louis Vicat</div>
          <div class="subtitle">2011-2013</div>

          <div class="subtitle m-t-50">BAC</div>
          <div class="subtitle">Lycée Louis Vicat</div>
          <div class="subtitle">2010</div>
        </div>

        <div class="resume-section-wrapper">
          <div class="resume-section-title">
            <div class="title">
              Compétences
            </div>
          </div>
          <div class="subtitle">Ingénieur</div>
          <div class="subtitle">CESI</div>
          <div class="subtitle">2013-2018</div>
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
      <div class="right-side-content-align">
        <div class="resume-section">
          <div class="resume-section-title">
            <div class="title">
              Profil
            </div>
          </div>
          <div class="resume-section-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi aperiam cum cupiditate eligendi harum ipsum maiores nostrum quaerat,
            quod ratione rem repellendus veritatis. Iste, porro.
          </div>
        </div>

        <div class="resume-section">
          <div class="resume-section-title">
            <div class="title">
              Experience
            </div>
          </div>
          <div class="resume-section-content">
            <div class="subtitle">Job title goes here</div>
            <div class="subtitle">Company name</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi aperiam cum cupiditate eligendi harum ipsum maiores nostrum quaerat,
              quod ratione rem repellendus veritatis. Iste, porro.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi corporis cumque dignissimos inventore omnis quam quos tempora.
              Deserunt doloremque eveniet excepturi libero magni rem repudiandae ut.
              Asperiores dignissimos ea explicabo illo!
              A accusamus accusantium animi deserunt ducimus facilis
              harum maiores minus optio quasi reiciendis reprehenderit saepe,
              sapiente suscipit tempora voluptatibus.
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, qui.</li>
                <li>Aspernatur atque eaque illo molestias quaerat recusandae sit suscipit
                  voluptatibus?
                </li>
                <li>Dolorem ea fugit ipsa, libero nihil nostrum quos similique voluptatem?</li>
              </ul>
            </div>
          </div>

          <div class="resume-section-content m-t-50">
            <div class="subtitle">Job title goes here</div>
            <div class="subtitle">Company name</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi aperiam cum cupiditate eligendi harum ipsum maiores nostrum quaerat,
              quod ratione rem repellendus veritatis. Iste, porro.
            </div>
          </div>
        </div>
      </div>
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
export default class ResumeComponent extends Vue {
  get msg(): string {
    return this.msg;
  }
}
</script>

<style lang="scss">
.icon {
  font-size: 22px;
}
.m-t-50 {
  margin-top: 50px !important;
}
.resume-section-title {
  position: relative;
  display: block;
  text-transform: uppercase;
  margin-bottom: 35px;
  text-align: left;

  .title {
    font-size: 27px;
    margin-left: 0px;
    font-weight: 900;
    color: #454545;
  }
  &::after {
    content: "";
    position: absolute;
    left: -75px;
    bottom: -17px;
    height: 2px;
    width: 150px;
    background-color: #454545;
  }
}
.subtitle {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 5px;
  color: #454545;
}

.resume-wrapper {
  position: relative;
  .left-side {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    background-color: #CAC9C7;
    background-image: url("@/assets/resume/texture-left.png");
    min-height: 500px;

    .location {
      position: relative;
      display: block;
      width: 100%;
      .vertical-bar {
        position: absolute;
        top: 0px;
        left: 75px;
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

    .left-side-content-align {
      position: relative;
      display: block;
      text-align: left;
      margin-top: 250px;
      margin-left: 75px;

      .name {
        font-size: 50px;
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 50px;
      }

      .resume-section-wrapper {
        postion: relative;
        margin-top: 50px;
        &:first-child {
          margin: 0px;
        }
        &:last-child {
          margin-bottom: 50px;
        }
        .resume-section-title {
          margin-bottom: 20px;
          &::after {
            bottom: -10px ;
            left: 0px;
            width: 40px;
            height: 1px;
          }
        }
      }

    }

  }
  .right-side {
    position: absolute;
    top: 0;
    left: 350px;
    right: 0px;
    background-color: #E6E4E7;
    background-image: url("@/assets/resume/texture-right.png");
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

    .right-side-content-align {
      position: relative;
      display: block;
      text-align: left;
      margin-top: 50px;
      margin-left: 75px;
      margin-right: 75px;

      .resume-section {
        position: relative;
        display: block;
        margin-top: 50px;
        text-align: left;
        width: 100%;
        &:first-child {
          margin-top: 0px;
        }
        &:last-child {
          margin-bottom: 50px;
        }

        .resume-section-content {
          position: relative;
          margin: 0;
          display: block;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
