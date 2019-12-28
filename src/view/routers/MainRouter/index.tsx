import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AccountCreateRouter } from '~/view/pages/account/AccountCreateRouter';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '~/redux/store';
import { URLS } from '~/constants/urls';
import { AccountList } from '~/view/pages/account/AccountList';
import { AccountRouter } from '../AccountRouter';
import { Layout } from '~/view/components/layout/Layout';
// import Dashboard from 'src/view/pages/dashboard';
import Send from '~/view/pages/dashboard/send';
import { AccountCreateCredentialForm } from '~/view/pages/createWallet';
import { AccountCreateInfo } from '~/view/pages/createWallet/mnemonicPhrase';
import { AccountCreateSuccess } from '~/view/pages/account/AccountCreateSuccess';
import { AccountRestoreRouter } from '~/view/pages/account/AccountRestoreRouter';

import AccessWallet from '~/view/pages/accessWallet';

const MainRouter = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Switch>
          <Route exact path="/" component={AccountList} />
          <Route exact path={URLS.ACCOUNT_RESTORE} component={AccountRestoreRouter} />

          <Route
            exact
            path={URLS.ACCOUNT_CREATE}
            component={AccountCreateRouter}
          />
          <Route
            exact
            path="/account/success"
            component={AccountCreateSuccess}
          />
          <Route exact path={URLS.ACCOUNT_LIST} component={AccountList} />

          <Route
            exact
            path={URLS.ACCOUNT_RESTORE}
            component={AccountRestoreRouter}
          />
          <Route path={URLS.ACCOUNT.BASE(':id')} component={AccountRouter} />
        </Switch>
      </Switch>
    </ConnectedRouter>
  );
};

export { MainRouter };
