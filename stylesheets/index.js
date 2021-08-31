const { StyleSheet } = require("react-native");
// .skills {
//   display: grid;
//   .skill {
//     height: 12rem;
//     font-size: large;
//     font-weight: 700;
//     &:nth-child(odd) {
//       grid-row: 1;
//     }
//   }
// }
// .list-skills {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   gap: 1rem;
// }
// .list-element {
//   display: flex;
//   gap: 1rem;
//   width: 100px;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   white-space: normal;
//   img {
//     width: 75px;
//   }
//   &:focus {
//     filter: brightness(0.6);
//   }
// }
// .heading {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   gap: 1rem;
// }

// }
// .container {
//   padding: 0;
// }
// footer {
//   margin-top: 3rem;
//   text-align: center;
// }

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
});
// .homepage {
//   background-image: url("../assets/post-it.svg");
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   .homepage-header {
//     border: 3px solid gray;
//     background-color: #2185d6;
//     color: white;
//     width: 300px;
//     text-align: center;
//     border-radius: 10px;
//   }

module.exports = { styles };
