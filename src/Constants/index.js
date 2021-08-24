
export const APP_STATE = {
	PUBLIC: "PUBLIC_LOGIN",
	PRIVATE: "MAIN_APP",
	AUTH: "CHECKING_LOGIN",
	UNKNOWN: "UNKNOWN"
};

export const STATUS = {
	SUCCESS: "SUCCESS",
	NOT_STARTED: "NOT_STARTED",
	FETCHING: "FETCHING",
	FAILED: "FAILED"
};

export const LOCALES = {
	ENGLISH: { id: 0, name: "en", label: "ENGLISH" },
	ESPAÑOL: { id: 1, name: "es", label: "ESPAÑOL" },
	GERMAN: { id: 2, name: "de", label: "GERMAN" },
};

export const USER_INFO='userInfo'
export const PAYMENT_INFO="paymentInfo";
export const IMAGE_OPTIONS = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
    quality: 0.5,
    includeBase64:true,
}