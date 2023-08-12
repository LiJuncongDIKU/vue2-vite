import Vue from 'vue';
import {
  Button,
  Icon,
  Dialog,
  Input,
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui';

// 默认取消弹窗点击遮罩层关闭
Dialog.props.closeOnClickModal.default = false;

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Loading.directive);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Input);
