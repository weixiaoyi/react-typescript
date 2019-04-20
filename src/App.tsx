import * as React from "react";
import * as styles from "./App.scss";
import HomeStore from "./store/HomeStore";

import { observer, inject } from "mobx-react";

interface IProps {
  homeStore?: HomeStore;
}

interface IState {
  name: string;
}

@inject(({ homeStore }) => ({ homeStore }))
@observer
class App extends React.Component<IProps, IState> {
  state = {
    name: "nnnnnnnnnnnnnnnnnnn"
  };

  public render() {
    const { name } = this.state;
    const { homeStore } = this.props;
    console.log(homeStore, "------");
    return (
      <div className={styles.App}>
        {homeStore!.name}
        <div className={styles.desc} />
      </div>
    );
  }
}

export default App;
