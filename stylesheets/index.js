const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homepageCard: {
    width: 300,
    margin: "auto",
    padding: 10,
    backgroundColor: "#1e76a0",
    color: "white",
    textAlign: "center",
    borderRadius: 4,
  },
});
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

module.exports = { styles };
