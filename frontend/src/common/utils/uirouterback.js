/**
 *
 * @param {"UIRouter.Transition"} transition
 */

function transitionBack(transition) {
  const prevState = transition.from();
  const prevParams = transition.params('from');

  if (!!prevState.name && !!Object.keys(prevParams).length) {
    transition.router.stateService.go(prevState, prevParams);
  } else {
  // eslint-disable-next-line no-restricted-globals
    history.back();
  }
}

export default transitionBack;
