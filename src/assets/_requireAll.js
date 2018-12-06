// requires and returns all modules that match
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

export default requireAll