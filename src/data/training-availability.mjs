// The same path policy is used by the React block and the static publisher.
export function showsTrainingAvailability(path) {
  return /^\/(?:training(?:-(?:usa|india|me))?|ndt-training-[a-z-]+|(?:ut|rt|mt|pt|vt|et|ndt)-level-[12]-training|asnt-level-2-ut-online-course|radiographic-testing-level-2-course|eddy-current-testing-level-2-course|paut-level-2-training-course|tofd-training-certification-course|liquid-penetrant-testing-level-1-course|magnetic-particle-testing-certification-course|ndt-level-2-recertification-course)$/.test(path);
}
