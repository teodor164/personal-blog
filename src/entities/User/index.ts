export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type {
    User,
    UserSchema,
} from './model/types/user';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/getUserRoles/getUserRoles';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { UserRole } from './model/consts/UserRole';

export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/service/saveJsonSettings';

export { initAuthData } from './model/service/initAuthData';
