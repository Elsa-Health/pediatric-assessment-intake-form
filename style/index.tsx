import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLightGray: {
    backgroundColor: "#D0D0CF",
  },
  headerDarkGray: {
    backgroundColor: "#625B5B",
  },

  headerCell: {
    padding: 12,
  },
  contentCell: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  removePadding: {
    padding: 0,
    paddingVertical: -16,
    paddingHorizontal: -8,
  },
});
