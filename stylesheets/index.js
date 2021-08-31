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
  homepageText: { color: "white", fontSize: "2rem", fontWeight: "bold" },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homepageCard: {
    padding: "1rem",
    border: "3px solid gray",
    backgroundColor: "#9F29D3",
    borderRadius: 5,
    width: 300,
    color: "white",
    textAlign: "center",
  },
});

module.exports = { styles };
