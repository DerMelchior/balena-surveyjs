#FROM igalia/balena-browser-wpe:%%BALENA_MACHINE_NAME%%
FROM igalia/balena-browser-wpe:raspberrypi3-64
COPY balena/image.manifest /image.manifest

COPY balena/wpe-init /wpe-init
RUN chmod +x /wpe-init

COPY balena/cog-fdo /usr/bin/
RUN chmod +x /usr/bin/cog-fdo

COPY balena/cog-open /usr/bin/
RUN chmod +x /usr/bin/cog-open

CMD [ "/wpe-init" ]

ENV TOHORA_VERSION=0.3.2
RUN wget -O tohora.tgz \
    "https://github.com/mozz100/tohora/releases/download/v"$TOHORA_VERSION"/tohora_"$TOHORA_VERSION"_Linux_armv5.tar.gz" \
    && tar xzf tohora.tgz \
    && rm tohora.tgz

