import useData from "./useData";

const useLodashPRs = () => useData("/repos/lodash/lodash/pulls");

export default useLodashPRs