export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export {
    User,
    UserSchema,
} from './model/types/user';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
