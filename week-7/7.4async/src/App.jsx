import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
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
  const notifications = useRecoilValue(notificationsAtom);
  const networkCount = notifications.network;
  const jobsCount = notifications.jobs;
  const messagingCount = notifications.messaging;
  const notificationsCount = notifications.notifications;
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
