#!/bin/bash

echo "is running test_run.sh"
pnpm exec playwright test \
${selected_options[@]} \
${{ github.event.inputs.files }} \
--shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }} \
--reporter allure-playwright