#!/usr/bin/env bash
# This init file was inspired by https://github.com/kazazes/balena-tailscale/blob/master/init
# and https://github.com/klutchell/balena-wireguard/blob/152b37e3a080102925c61ec8863851fe24f54c9f/insmod.sh

set -me

    echo "modprobe udp_tunnel..."
    modprobe udp_tunnel

    echo "modprobe ip6_udp_tunnel..."
    modprobe ip6_udp_tunnel

    echo "modinfo wireguard..."
    modinfo "${modpath}"

    echo "modprobe wireguard..."
    modprobe wireguard

if [ -z "${TAILSCALE_AUTHKEY}" ]; then
    echo "Missing TAILSCALE_AUTHKEY env variable."
    exit 1
fi

if [ -z "${TAILSCALE_HOSTNAME}" ]; then
    export TAILSCALE_HOSTNAME=${BALENA_DEVICE_NAME_AT_INIT}
fi

if [ -z "${TAILSCALE_TAGS}" ]; then
    export TAILSCALE_TAGS="tag:docker,tag:balena,tag:server"
fi

tailscaled -state=/tailscale/tailscaled.state &
sleep 5
tailscale up -authkey "${TAILSCALE_AUTHKEY}" -hostname "${TAILSCALE_HOSTNAME}" -advertise-tags "${TAILSCALE_TAGS}" $@

fg