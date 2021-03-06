export function initServer({dispatch}, {app}){
  const tokens = app.$cookies.get('_h');
  dispatch('auth/initProfile', tokens);   
   
  let isDarkTheme = app.$cookies.get('isDarkTheme');
  if(isDarkTheme === undefined) isDarkTheme = true;
  dispatch('ui/setTheme', isDarkTheme);

  let isLang = app.$cookies.get('isLang');
  if(isLang === undefined) isLang = 'en';
  dispatch('ui/setLang', isLang);
}

export function initClient({dispatch, commit, state}){
  commit('auth/INIT');
  if(state.auth.profile.reset) commit('auth/UNSET_PROFILE');
}