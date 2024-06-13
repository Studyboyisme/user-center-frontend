import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '星球用户中心',
  pwa: false,
  logo: 'https://web-study-123.oss-cn-hangzhou.aliyuncs.com/%E6%98%9F%E7%90%83.png',
  iconfontUrl: '',
};

export default Settings;
