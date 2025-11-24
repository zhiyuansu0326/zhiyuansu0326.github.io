# Ruby 3.4 兼容性补丁
# 修复 Liquid gem 中 tainted? 方法的问题

if RUBY_VERSION >= "3.0"
  class String
    def tainted?
      false
    end
  end
end

