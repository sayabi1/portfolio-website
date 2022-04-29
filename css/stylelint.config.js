:root {
  --header-footer: #bcbcbc;
  --light-gray: #d3d3d3;
  --link-active: #b53131;
  --black-color: #000;
  --olive-color: #808000;
  --dark-red: #8c2727;
  --font-size: 16px;
  --heading-small: 22px;
  ---border-radius: 5px;
}

* {
  box-sizing: border-box;
}

body {
  background: #eeeeee;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: var(--font-size);
  line-height: 1.6;
  margin: 0;
}

h1 {
  font-size: 50px;
  font-weight: 700;
}

/* Header */
.page-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 30px;
  background: var(--header-footer);
  box-shadow: 4px 3px 19px 0px rgba(0, 0, 0, 0.5);
}

/*
.page-header {
display: flex;
width: 100%;
padding: 20px;
}

.page-header__item {
flex: 0 1 200px;
}
.page-header__item:last-child {
flex-grow: 1;
text-align: right;
}
.navigation-list li {
display: inline-block;
margin-left: 15px;
}
*/
/* Navigaton */
.navigation-list {
  list-style-type: none;
}

.navigation-list li {
  display: inline-block;
  margin-left: 15px;
}

.navigation-list__item {
  color: var(--dark-red);
  text-decoration: none;
}

.navigation-list__item:visited {
  color: var(--olive-color);
}

.navigation-list__item:hover,
a:focus {
  text-decoration: none;
  color: var(--black-color);
}

.navigation-list__item:active {
  color: var(--link-active);
}

.navigation-list__item--active {
  text-decoration: none;
  font-weight: bold;
}

/* Main */
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}

.profile__logo {
  margin-right: 20px;
  width: 300px;
  height: auto;
  border-radius: 50%;
  max-width: 100%;
}

/* button */
button,
.button {
  border: none;
  display: inline-block;
  font-size: var(--font-size);
  color: var(--black-color);
  background: var(--olive-color);
  margin: 10px;
  padding: 10px;
  border-radius: var(---border-radius);
  border: 1px solid var(--light-gray);
  text-decoration: none;
  transition: 0.2s opacity;
}

button:hover,
button:focus,
.button:hover,
.button:focus {
  cursor: pointer;
  background-color: var(--dark-red);
  /* reduces the opacity of the button to 80% */
  opacity: 0.8;
}

/* Footer */
.page-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--header-footer);
  box-shadow: 4px 3px 19px 0px rgba(0, 0, 0, 0.7);
  padding: 60px;
}

/* linked HTML */
.main-contact {
  padding: 50px;
  text-align: center;
}

.main-contact__details {
  border: 1px solid lightgray;
  border-radius: 3px;
  font-size: 20px;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 4px 3px 19px 0px rgba(0, 0, 0, 0.3);
}

.main-contact__details__list {
  text-decoration: none;
  font-style: italic;
  color: var(--olive-color);
}

.main-contact__details__list:hover,
.main-contact__details__list:focus {
  cursor: pointer;
  background-color: var(--dark-red);
  /* reduces the opacity of the button to 80% */
  opacity: 0.8;
}

.main-about {
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
}

.main-about__list {
  list-style-type: none;
}

.page-footer--work {
  padding: 20px;
}

.page-footer--about {
  padding: 81px;
}

.page-footer--contact {
  padding: 80px;
}

/* Grid Layout */
.project {
  padding: 15px;
  text-align: center;
}

/* start grid fallback */
.grid__item {
  display: inline-block;
  width: 33%;
}

/* end grid fallback */
@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0;
  }

  .grid__item {
    background-color: var(--light-gray);
    width: auto;
    border-radius: var(---border-radius);
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    min-height: auto;
    margin: 0;
    padding: 20px;
  }

  .grid__item:last-child {
    grid-column: 3 / 3;
    grid-row: 1 / 3;
  }
}

@media all and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .grid__item:last-child {
    grid-column: auto/auto;
    grid-row: auto/auto;
  }

  h1 {
    font-size: var(--heading-small);
  }

  .profile {
    padding: 60px 0;
    flex-direction: column;
  }

  .navigation-list {
    display: flex;
    flex-direction: column;
  }

  .main-contact {
    padding: 50px;
    text-align: center;
  }

  .main-about {
    max-width: 80%;
  }
}

@media all and (min-width: 500px) and (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .grid__item:last-child {
    grid-column: auto/auto;
    grid-row: auto/auto;
  }

  h1 {
    font-size: var(--heading-small);
  }

  .main-about {
    max-width: 60%;
  }
}

/* Animation */
@keyframes color-change {
  0% {
    fill: #edc655;
  }

  50% {
    fill: #fcffad;
  }

  100% {
    fill: #f76414;
  }
}

/*
.sun {
  animation-duration: 4s;
  animation-name: color-change;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
*/
.sun {
  animation: 4s color-change infinite alternate linear;
}

@keyframes cloud-move {
  from {
    transform: translate(0, 50px);
  }

  to {
    transform: translate(200px, 50px);
  }
}

.cloud-front {
  animation: 30s cloud-move infinite alternate linear;
}

@keyframes cloud-move-reverse {
  from {
    transform: translate(446px, 48px);
  }

  to {
    transform: translate(100px, 48px);
  }
}

.cloud-back {
  animation: 34s cloud-move-reverse infinite alternate linear;
}

/*
@keyframes backgrounds {
  0% {
    background: #0a9396;
  }
  100% {
    background: rgba(3,43,62,0.94);
  }
}
*/
/*
@keyframes daylight {
  0% {
    background-color: #70c4c6;
  }
  15% {
    background-color: #524b64;
  }
  40% {
    background-color: #354a4a;
  }
  70% {
    background-color: #354a4a;
  }
  80% {
    background-color: #e2b553;
  }
  100% {
    background-color: #70c4c6;
  }
}
*/
@keyframes daylight {
  0% {
    background-color: #edc655;
  }

  50% {
    background-color: #fcffad;
  }

  100% {
    background-color: #f76414;
  }
}

.berlin-illustration {
  animation: 4s daylight infinite alternate linear;
}

table {
  margin: 10px auto;
  border-collapse: collapse;
  box-shadow: 4px 3px 19px 0px rgba(0, 0, 0, 0.3);
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}

/* Form */
.form-container {
  display: flex;
  justify-content: center;
}

#contact-form {
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: var(--light-gray);
  width: 40%;
  display: flex;
  color: #222;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

input {
  width: 50%;
  height: 100%;
  margin: 10px;
  background: transparent;
  outline: none;
  font-size: 15px;
  padding: 10px 0 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2pxpx 0 rgba(0, 0, 0, 0.3);
  color: #222;
  border-radius: 10px;
}

.standard-label {
  line-height: 40px;
  color: #000;
  font-size: 24px;
  margin: 0 0 0 30px;
  display: block;
  pointer-events: none;
}

textarea {
  width: 50%;
  height: 100%;
  margin: 10px;
  background: transparent;
  outline: none;
  font-size: 15px;
  margin-top: 10px;
  padding: 10px 0 10px 20px;
  border: 5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
}

input:focus,
textarea:focus {
  border: 5px solid #ffffff;
  transition: all 0.5s;
}

@media all and (max-width: 700px) {
  #contact-form {
    width: 90%;
  }

  .standard-label {
    line-height: 20px;
    color: #000;
    font-size: 16px;
    margin: 0 0 0 15px;
    display: block;
    pointer-events: none;
  }

  input {
    font-size: 13px;
    width: 80%;
  }

  textarea {
    font-size: 15px;
  }
}
