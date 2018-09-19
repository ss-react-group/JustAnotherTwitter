import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';
import { GithubFigure, SoftServeFigure } from '../../components/Common/Figure';
import './Authentication.scss';

interface IAuthorizationProps {
  stores?: any;
}

@inject('stores')
@observer
export class Authentication extends React.Component<IAuthorizationProps, {}> {
  constructor(props: IAuthorizationProps) {
    super(props);
  }
  render() {
    return this.props.stores.userDetails.user ? (
      <Redirect exact to="/" />
    ) : (
      <React.Fragment>
        <div className="auth-content">
          <aside className="auth-content__left">
            <figure className="auth-content__background-image">
              <img
                className="background-image"
                src="https://react-academy.herokuapp.com/assets/static/pineapple.jpg"
                alt=""
              />
            </figure>
            <figure className="auth-content__github-reference">
              <GithubFigure />
            </figure>

            <article className="auth-content__application-name">
              <h1 className="application-name__header">
                <span className="application-name__partial application-name__partial--bold">
                  JUST
                </span>
                <span className="application-name__partial application-name__partial--bold">
                  ANOTHER
                </span>
                <span className="application-name__partial application-name__partial--regular">
                  Twitter
                </span>
              </h1>
            </article>

            <figure className="auth-content__soft-serve-reference">
              <SoftServeFigure />
            </figure>
          </aside>
          <section className="auth-content__right">
            <article className="auth-content__application-slogan">
              <h2 className="application-slogan">Stay connected</h2>
            </article>
            <div className="auth-content__card">
              <Login />
              <Register />
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
