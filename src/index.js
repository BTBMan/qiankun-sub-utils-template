export const utilTest = () => {
  console.log('util test');
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  //
}

export async function bootstrap() {
  // console.log('[util] bootstraped');
}
export async function mount(props) {
  // const { window } = props; // 如果隔离了的话就须要把window从父应用传过来
  // console.log('[util] props from main framework', props);
  // render(props);
  // utilTest();
  // console.log(window);
  window.utilTest = utilTest;
}
export async function unmount() {
  //
}
