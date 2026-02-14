local group = vim.api.nvim_create_augroup("ProjectPrettierFormat", { clear = true })

local function split_lines(text)
  local lines = vim.split(text, "\n", { plain = true })
  if #lines > 0 and lines[#lines] == "" then
    table.remove(lines, #lines)
  end
  return lines
end

vim.api.nvim_create_autocmd("BufWritePre", {
  group = group,
  pattern = { "*.js", "*.jsx", "*.ts", "*.tsx", "*.css", "*.json", "*.md" },
  callback = function()
    local file = vim.api.nvim_buf_get_name(0)
    if file == "" then
      return
    end

    local prettier_cmd = nil
    if vim.fn.executable("./node_modules/.bin/prettier") == 1 then
      prettier_cmd = { "./node_modules/.bin/prettier" }
    elseif vim.fn.executable("prettier") == 1 then
      prettier_cmd = { "prettier" }
    elseif vim.fn.executable("npx") == 1 then
      prettier_cmd = { "npx", "--yes", "prettier" }
    else
      vim.notify("Prettier not found", vim.log.levels.WARN)
      return
    end

    local input = table.concat(vim.api.nvim_buf_get_lines(0, 0, -1, false), "\n")
    local cmd = vim.list_extend(prettier_cmd, { "--stdin-filepath", file })
    local result = vim.system(cmd, { stdin = input, text = true }):wait()

    if result.code ~= 0 then
      local err = (result.stderr or ""):gsub("%s+$", "")
      vim.notify("Prettier failed:\n" .. err, vim.log.levels.WARN)
      return
    end

    vim.api.nvim_buf_set_lines(0, 0, -1, false, split_lines(result.stdout or ""))
  end,
})
