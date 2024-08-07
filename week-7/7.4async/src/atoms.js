import { atom, selector } from "recoil";
import axios from "axios";

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "notificationsAtom/default",
    get: async()   => { 
        const res = await axios.get("https://sum-server.100xdevs.com/notifications");
        return res.data;
    }
  }),
});

export const totalCountSelector = selector({
  key: "totalCountSelector",
  get: ({ get }) => {
    const allCounts = get(notificationsAtom);
    return (
      allCounts.network +
      allCounts.jobs +
      allCounts.messaging +
      allCounts.notifications
    );
  },
});
