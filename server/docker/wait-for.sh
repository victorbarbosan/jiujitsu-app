#!/bin/sh
# Usage: ./wait-for.sh postgres:5432 -- npm start

set -e

host=$(echo "$1" | cut -d':' -f1)
port=$(echo "$1" | cut -d':' -f2)
shift

until nc -z "$host" "$port"; do
  echo "Waiting for $host:$port..."
  sleep 1
done

exec "$@"