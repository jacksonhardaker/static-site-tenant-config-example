# Static Site with Tenant/Environment Config

## Overview

This repository is an NX monorepo containing a Next.js application named "service" and a library named "config". The project demonstrates a strategy for building a static Next.js application once and deploying it across multiple environments with unique configurations.

## Config Library

The `config` library includes a very basic build script that accepts "tenant" and "environment" as inputs. It generates a `config.js` file, which is then saved into the `/public` folder of the built service application.

## Service Application

The service application is a customized Next.js app. It imports the `config.js` file via a `<script>` tag defined in `_document.tsx`. The configuration is attached to `window._bitdrift.config`.

### UseConfig Hook

The application defines `useConfig.ts`, a React hook for accessing the configuration from `window._bitdrift.config`. While this hook does not support modifying the config within React, it uses a Proxy to update the config state within `useConfig` if `window._bitdrift.config` is manually changed.

## Deployment Strategy

The service application is designed to be built statically using `next export`. The static build can be copied to various S3 buckets based on different tenant/environment combinations. The corresponding config is injected into the build artifacts, allowing for a single build to be used multiple times with varied configurations.
