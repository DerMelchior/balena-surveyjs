#!/usr/bin/env sh
OS_VERSION=$(echo "$BALENA_HOST_OS_VERSION" | cut -d " " -f 2)
echo "OS Version is $OS_VERSION"


# Pass the CMD to the entrypoint from the base images
# Run the passed CMD as PID 1
exec /usr/bin/entry.sh "$@"