import { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCALSTORAGE_LAST_SAVED_DESIGN_KEY } from '@/shared/const/localStorarge';

let featureFlags: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCALSTORAGE_LAST_SAVED_DESIGN_KEY) === 'new',
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
