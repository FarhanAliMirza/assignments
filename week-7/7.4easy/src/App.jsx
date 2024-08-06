import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  networkAtom,
  jobsAtom,
  messagingAtom,
  notificationsAtom,
  totalCountSelector,
} from "./atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

const MainApp = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalCount = useRecoilValue(totalCountSelector);
  return (
      <>
        <button>Home</button>

        <button>
          My Network ({networkCount >= 100 ? "99+" : networkCount})
        </button>
        <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
        <button>
          Messaging ({messagingCount >= 100 ? "99+" : messagingCount})
        </button>
        <button>
          Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})
        </button>

        <button>Me ({totalCount})</button>
      </>
  );
};

export default App;
